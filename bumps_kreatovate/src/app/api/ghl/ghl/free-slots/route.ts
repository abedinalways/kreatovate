import { NextResponse } from 'next/server';

/**
 * GHL Free Slots API (FINAL, TIMEZONE-SAFE)
 *
 * Frontend sends:
 * {
 *   startDate: number, // ms UTC – already timezone-correct
 *   endDate: number,   // ms UTC – already timezone-correct
 *   timezone: "America/Chicago"
 * }
 *
 * IMPORTANT:
 * - Backend MUST NOT compute dates
 * - Backend MUST NOT use new Date(y,m,d)
 * - Backend ONLY forwards timestamps to GHL
 */

type NormalizedSlot = {
  startTime: string;
  endTime: string;
};

/* ---------------- NORMALIZER ---------------- */

function addMinutesPreserveOffset(startISO: string, minutes: number) {
  const m = startISO.match(
    /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})([+-]\d{2}:\d{2})$/,
  );
  if (!m) return null;

  const [, base, offset] = m;

  const startUtc = new Date(startISO).getTime();
  const endUtc = startUtc + minutes * 60_000;

  const endLocal = new Date(endUtc);

  // Build ISO without converting offset
  const yyyy = endLocal.getUTCFullYear();
  const mm = String(endLocal.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(endLocal.getUTCDate()).padStart(2, '0');
  const hh = String(endLocal.getUTCHours()).padStart(2, '0');
  const mi = String(endLocal.getUTCMinutes()).padStart(2, '0');
  const ss = String(endLocal.getUTCSeconds()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}${offset}`;
}

// version 2
function normalizeSlots(
  raw: Record<string, string[] | { slots: string[] }>,
  slotDurationMinutes = 30,
): Record<string, { startTime: string; endTime: string }[]> {
  const out: Record<string, { startTime: string; endTime: string }[]> = {};

  if (!raw || typeof raw !== 'object') return out;

  for (const [key, value] of Object.entries(raw)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) continue;

    const push = (startISO: string) => {
      const endISO = addMinutesPreserveOffset(startISO, slotDurationMinutes);
      if (!endISO) return;

      out[key] = out[key] || [];
      out[key].push({
        startTime: startISO,
        endTime: endISO, // SAME OFFSET
      });
    };

    if (Array.isArray(value)) {
      value.forEach((v: string) => typeof v === 'string' && push(v));
    } else if (
      typeof value === 'object' &&
      value !== null &&
      'slots' in value &&
      Array.isArray((value as { slots: string[] }).slots)
    ) {
      (value as { slots: string[] }).slots.forEach(
        (v: string) => typeof v === 'string' && push(v),
      );
    }
  }

  return out;
}

/* ---------------- ROUTE ---------------- */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { startDate, endDate, timezone } = body;

    // Strict validation
    if (typeof startDate !== 'number' || typeof endDate !== 'number') {
      return NextResponse.json(
        {
          error: true,
          message: 'startDate and endDate (milliseconds) are required',
        },
        { status: 400 },
      );
    }

    const GHL_BASE_URL =
      process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com';
    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

    if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
      return NextResponse.json(
        { error: true, message: 'GHL configuration missing' },
        { status: 500 },
      );
    }

    const tz = timezone || 'America/Chicago';

    const url =
      `${GHL_BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots` +
      `?startDate=${startDate}` +
      `&endDate=${endDate}` +
      `&timezone=${encodeURIComponent(tz)}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: '2021-04-15',
        Accept: 'application/json',
      },
    });

    const raw = await res.json();

    //console.log("GHL FREE SLOTS RAW:", JSON.stringify(raw, null, 2));

    if (!res.ok) {
      return NextResponse.json(
        {
          error: true,
          message: raw?.message || raw?.msg || 'Failed to fetch free slots',
        },
        { status: res.status },
      );
    }

    const normalized = normalizeSlots(raw, 30);

    // console.log(
    //     "GHL FREE SLOTS NORMALIZED:",
    //     JSON.stringify(normalized, null, 2)
    // );

    return NextResponse.json({
      success: true,
      slots: normalized,
    });
  } catch (error: unknown) {
    //console.error("FREE SLOTS API ERROR:", error);
    const message =
      error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: true, message }, { status: 500 });
  }
}
