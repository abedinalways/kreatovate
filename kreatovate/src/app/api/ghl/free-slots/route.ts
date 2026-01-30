// // LTS version
// import { NextResponse } from "next/server";

// /**
//  * GHL Free Slots API
//  *
//  * We expect frontend to send:
//  * {
//  *   date: "YYYY-MM-DD",
//  *   timezone: "America/New_York"
//  * }
//  *
//  * IMPORTANT:
//  * - We MUST NOT use Date.toISOString()
//  * - We MUST NOT introduce UTC day shifting
//  * - We treat the date as a pure calendar day
//  */

// type NormalizedSlot = {
//     startTime: string;
//     endTime: string;
// };

// // ---------------- HELPERS ---------------- //

// /**
//  * Build start/end timestamps (milliseconds)
//  * for a calendar day WITHOUT timezone shifting.
//  */
// function buildDayRange(dateStr: string) {
//     const [y, m, d] = dateStr.split("-").map(Number);

//     const start = new Date(y, m - 1, d, 0, 0, 0, 0).getTime();
//     const end = new Date(y, m - 1, d, 23, 59, 59, 999).getTime();

//     return { start, end };
// }

// /**
//  * Normalize all possible GHL free-slot shapes into:
//  * {
//  *   "YYYY-MM-DD": [{ startTime, endTime }]
//  * }
//  *
//  * GHL may return:
//  * - string[] (start times only)
//  * - { slots: string[] }
//  * - meta keys like traceId
//  */
// function normalizeSlots(
//     raw: any,
//     slotDurationMinutes = 30
// ): Record<string, NormalizedSlot[]> {
//     const out: Record<string, NormalizedSlot[]> = {};

//     if (!raw || typeof raw !== "object") return out;

//     for (const [key, value] of Object.entries(raw)) {
//         // Only accept YYYY-MM-DD keys
//         if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) continue;

//         const push = (startISO: string) => {
//             const start = new Date(startISO);
//             if (Number.isNaN(start.getTime())) return;

//             const end = new Date(start);
//             end.setMinutes(end.getMinutes() + slotDurationMinutes);

//             out[key] = out[key] || [];
//             out[key].push({
//                 startTime: startISO,
//                 endTime: end.toISOString(),
//             });
//         };

//         // Case 1: array directly
//         if (Array.isArray(value)) {
//             value.forEach((v) => typeof v === "string" && push(v));
//             continue;
//         }

//         // Case 2: { slots: [...] }
//         if (value && typeof value === "object" && Array.isArray((value as any).slots)) {
//             (value as any).slots.forEach((v: any) => {
//                 if (typeof v === "string") push(v);
//             });
//         }
//     }

//     return out;
// }

// // ---------------- ROUTE ---------------- //

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { date, timezone } = body;

//         if (!date || typeof date !== "string") {
//             return NextResponse.json(
//                 { error: true, message: "date (YYYY-MM-DD) is required" },
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

//         // Build range WITHOUT UTC shifting
//         const { start, end } = buildDayRange(date);

//         const url =
//             `${GHL_BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots` +
//             `?startDate=${start}` +
//             `&endDate=${end}` +
//             `&timezone=${encodeURIComponent(tz)}`;

//         const res = await fetch(url, {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${GHL_API_KEY}`,
//                 Version: "2021-04-15",
//                 Accept: "application/json",
//             },
//         });

//         const raw = await res.json();

//         console.log("GHL FREE SLOTS RAW:", JSON.stringify(raw, null, 2));

//         if (!res.ok) {
//             return NextResponse.json(
//                 {
//                     error: true,
//                     message: raw?.message || raw?.msg || "Failed to fetch free slots",
//                 },
//                 { status: res.status }
//             );
//         }

//         const normalized = normalizeSlots(raw, 30);

//         console.log(
//             "GHL FREE SLOTS NORMALIZED:",
//             JSON.stringify(normalized, null, 2)
//         );

//         return NextResponse.json({
//             success: true,
//             slots: normalized,
//         });
//     } catch (error: any) {
//         console.error("FREE SLOTS API ERROR:", error);
//         return NextResponse.json(
//             { error: true, message: error.message || "Internal server error" },
//             { status: 500 }
//         );
//     }
// }


// version LTS 2 (production)
import { NextResponse } from "next/server";

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

function normalizeSlots(
    raw: any,
    slotDurationMinutes = 30
): Record<string, NormalizedSlot[]> {
    const out: Record<string, NormalizedSlot[]> = {};

    if (!raw || typeof raw !== "object") return out;

    for (const [key, value] of Object.entries(raw)) {
        // Only accept YYYY-MM-DD keys
        if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) continue;

        const push = (startISO: string) => {
            const start = new Date(startISO);
            if (Number.isNaN(start.getTime())) return;

            const end = new Date(start);
            end.setMinutes(end.getMinutes() + slotDurationMinutes);

            out[key] = out[key] || [];
            out[key].push({
                startTime: startISO,
                endTime: end.toISOString(),
            });
        };

        // Case 1: array directly
        if (Array.isArray(value)) {
            value.forEach((v) => typeof v === "string" && push(v));
            continue;
        }

        // Case 2: { slots: [...] }
        if (
            value &&
            typeof value === "object" &&
            Array.isArray((value as any).slots)
        ) {
            (value as any).slots.forEach((v: any) => {
                if (typeof v === "string") push(v);
            });
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
        if (
            typeof startDate !== "number" ||
            typeof endDate !== "number"
        ) {
            return NextResponse.json(
                {
                    error: true,
                    message: "startDate and endDate (milliseconds) are required",
                },
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

        const tz = timezone || "America/Chicago";

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

        //console.log("GHL FREE SLOTS RAW:", JSON.stringify(raw, null, 2));

        if (!res.ok) {
            return NextResponse.json(
                {
                    error: true,
                    message:
                        raw?.message ||
                        raw?.msg ||
                        "Failed to fetch free slots",
                },
                { status: res.status }
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
    } catch (error: any) {
        //console.error("FREE SLOTS API ERROR:", error);
        return NextResponse.json(
            { error: true, message: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
