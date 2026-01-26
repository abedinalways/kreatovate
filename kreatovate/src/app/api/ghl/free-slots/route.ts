// import { NextResponse } from "next/server";

// /**
//  * GHL Free Slots API
//  * Endpoint:
//  *   GET /calendars/{calendarId}/free-slots
//  *
//  * Required:
//  *   - startDate (number, milliseconds)
//  *   - endDate (number, milliseconds)
//  *   - timezone (string)
//  *
//  * NOT allowed:
//  *   - locationId
//  *
//  * Version:
//  *   - 2021-04-15
//  */

// export async function POST(req: Request) {
//     try {
//         const { dateISO, timezone } = await req.json();

//         if (!dateISO) {
//             return NextResponse.json(
//                 { error: true, message: "dateISO is required" },
//                 { status: 400 }
//             );
//         }

//         const GHL_BASE_URL =
//             process.env.GHL_BASE_URL || "https://services.leadconnectorhq.com";
//         const GHL_API_KEY = process.env.GHL_API_KEY;
//         const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

//         if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
//             return NextResponse.json(
//                 { error: true, message: "GHL configuration missing" },
//                 { status: 500 }
//             );
//         }

//         const tz = timezone || "America/New_York";

//         // Build start/end of selected day in milliseconds
//         const selectedDate = new Date(dateISO);

//         const startDate = new Date(
//             selectedDate.getFullYear(),
//             selectedDate.getMonth(),
//             selectedDate.getDate(),
//             0,
//             0,
//             0,
//             0
//         ).getTime();

//         const endDate = new Date(
//             selectedDate.getFullYear(),
//             selectedDate.getMonth(),
//             selectedDate.getDate(),
//             23,
//             59,
//             59,
//             999
//         ).getTime();

//         const url =
//             `${GHL_BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots` +
//             `?startDate=${startDate}` +
//             `&endDate=${endDate}` +
//             `&timezone=${encodeURIComponent(tz)}`;

//         const res = await fetch(url, {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${GHL_API_KEY}`,
//                 Version: "2021-04-15",
//                 Accept: "application/json",
//             },
//         });

//         const data = await res.json();

//         // 🔎 CRITICAL LOG — DO NOT REMOVE
//         console.log(
//             "GHL FREE SLOTS RESPONSE:",
//             JSON.stringify(data, null, 2)
//         );

//         if (!res.ok) {
//             return NextResponse.json(
//                 {
//                     error: true,
//                     message:
//                         data?.message ||
//                         data?.msg ||
//                         "Failed to fetch free slots",
//                 },
//                 { status: res.status }
//             );
//         }

//         return NextResponse.json({
//             success: true,
//             slots: data || {},
//         });
//     } catch (error: any) {
//         console.error("FREE SLOTS API ERROR:", error);
//         return NextResponse.json(
//             {
//                 error: true,
//                 message: error.message || "Internal server error",
//             },
//             { status: 500 }
//         );
//     }
// }


//// version 2 bellow is under test
import { NextResponse } from "next/server";

/**
 * Normalizes GHL free-slots responses into:
 * {
 *   "YYYY-MM-DD": [{ startTime: string, endTime: string }]
 * }
 *
 * GHL may return shapes like:
 * 1) { "2026-01-28": ["ISO"] }
 * 2) { "2026-01-28": { slots: ["ISO"] } }
 * 3) { "2026-01-28": { slots: [{ startTime, endTime }, ...] } }
 * 4) plus meta keys like traceId
 */

type NormalSlot = { startTime: string; endTime: string };

function addMinutes(iso: string, minutes: number) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    d.setMinutes(d.getMinutes() + minutes);
    // Keep offset formatting by returning ISO Z is fine for create?
    // For GHL create appointment, ISO with offset or Z typically works.
    // We'll return Z-form; if needed you can keep original offset elsewhere.
    return d.toISOString();
}

function normalizeFreeSlots(
    raw: any,
    defaultDurationMinutes = 30
): Record<string, NormalSlot[]> {
    const out: Record<string, NormalSlot[]> = {};
    if (!raw || typeof raw !== "object") return out;

    for (const [key, value] of Object.entries(raw)) {
        // Skip meta keys
        if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) continue;

        const pushSlot = (startTime: string, endTime?: string) => {
            if (!startTime || typeof startTime !== "string") return;
            const end =
                (endTime && typeof endTime === "string" && endTime) ||
                addMinutes(startTime, defaultDurationMinutes);
            if (!end) return;

            out[key] = out[key] || [];
            out[key].push({ startTime, endTime: end });
        };

        // Case A: array directly
        if (Array.isArray(value)) {
            for (const s of value) {
                if (typeof s === "string") pushSlot(s);
                else if (s && typeof s === "object") {
                    const st = (s as any).startTime || (s as any).start;
                    const et = (s as any).endTime || (s as any).end;
                    if (typeof st === "string") pushSlot(st, typeof et === "string" ? et : undefined);
                }
            }
            continue;
        }

        // Case B: object with slots array
        if (value && typeof value === "object") {
            const slots = (value as any).slots;

            if (Array.isArray(slots)) {
                for (const s of slots) {
                    if (typeof s === "string") pushSlot(s);
                    else if (s && typeof s === "object") {
                        const st = (s as any).startTime || (s as any).start;
                        const et = (s as any).endTime || (s as any).end;
                        if (typeof st === "string") pushSlot(st, typeof et === "string" ? et : undefined);
                    }
                }
            }
        }
    }

    return out;
}

export async function POST(req: Request) {
    try {
        const { dateISO, timezone } = await req.json();

        if (!dateISO) {
            return NextResponse.json(
                { error: true, message: "dateISO is required" },
                { status: 400 }
            );
        }

        const GHL_BASE_URL =
            process.env.GHL_BASE_URL || "https://services.leadconnectorhq.com";
        const GHL_API_KEY = process.env.GHL_API_KEY;
        const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

        if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
            return NextResponse.json(
                { error: true, message: "GHL configuration missing" },
                { status: 500 }
            );
        }

        const tz = timezone || "America/New_York";

        const selectedDate = new Date(dateISO);

        const startDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            0,
            0,
            0,
            0
        ).getTime();

        const endDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            23,
            59,
            59,
            999
        ).getTime();

        const url =
            `${GHL_BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots` +
            `?startDate=${startDate}` +
            `&endDate=${endDate}` +
            `&timezone=${encodeURIComponent(tz)}`;

        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${GHL_API_KEY}`,
                Version: "2021-04-15",
                Accept: "application/json",
            },
        });

        const raw = await res.json();

        console.log("GHL FREE SLOTS RAW:", JSON.stringify(raw, null, 2));

        if (!res.ok) {
            return NextResponse.json(
                {
                    error: true,
                    message: raw?.message || raw?.msg || "Failed to fetch free slots",
                },
                { status: res.status }
            );
        }

        // ✅ Normalize to a stable structure for frontend
        const normalized = normalizeFreeSlots(raw, 30);

        console.log("GHL FREE SLOTS NORMALIZED:", JSON.stringify(normalized, null, 2));

        return NextResponse.json({
            success: true,
            slots: normalized,
        });
    } catch (error: any) {
        console.error("FREE SLOTS API ERROR:", error);
        return NextResponse.json(
            { error: true, message: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
