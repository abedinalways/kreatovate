// import { NextResponse } from "next/server";

// const GHL_BASE_URL = process.env.NEXT_PUBLIC_GHL_BASE_URL

// const GHL_API_KEY = process.env.GHL_API_KEY;
// const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

// export async function GET(req: Request) {
//     try {
//         if (!GHL_API_KEY) throw new Error("GHL_API_KEY missing");
//         if (!GHL_CALENDAR_ID) throw new Error("GHL_CALENDAR_ID missing");

//         const { searchParams } = new URL(req.url);

//         const date = searchParams.get("date"); // yyyy-mm-dd
//         const timezone = searchParams.get("timezone") || "Asia/Dhaka";

//         if (!date) {
//             return NextResponse.json(
//                 { error: true, message: "date is required" },
//                 { status: 400 }
//             );
//         }

//         const url = new URL(
//             `${GHL_BASE_URL}/calendars/events/slots`
//         );

//         url.searchParams.append("calendarId", GHL_CALENDAR_ID);
//         url.searchParams.append("startDate", date);
//         url.searchParams.append("endDate", date);
//         url.searchParams.append("timezone", timezone);

//         const res = await fetch(url.toString(), {
//             headers: {
//                 Authorization: `Bearer ${GHL_API_KEY}`,
//                 Version: "2021-07-28",
//                 Accept: "application/json",
//             },
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             return NextResponse.json(
//                 { error: true, message: data.message || "Failed to fetch slots" },
//                 { status: res.status }
//             );
//         }

//         return NextResponse.json({
//             success: true,
//             slots: data.slots || [],
//         });
//     } catch (error: any) {
//         return NextResponse.json(
//             { error: true, message: error.message },
//             { status: 500 }
//         );
//     }
// }

import { NextResponse } from "next/server";

const GHL_BASE_URL = process.env.NEXT_PUBLIC_GHL_BASE_URL!;
const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID!;

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const date = searchParams.get("date");
        const timezone = searchParams.get("timezone") || "America/New_York";

        if (!date) {
            return NextResponse.json(
                { error: true, message: "date is required" },
                { status: 400 }
            );
        }

        const url = new URL(`${GHL_BASE_URL}/calendars/events/slots`);
        url.searchParams.set("calendarId", GHL_CALENDAR_ID);
        url.searchParams.set("startDate", date);
        url.searchParams.set("endDate", date);
        url.searchParams.set("timezone", timezone);

        const res = await fetch(url.toString(), {
            headers: {
                Authorization: `Bearer ${GHL_API_KEY}`,
                Version: "2021-07-28",
                Accept: "application/json",
            },
        });

        const data = await res.json();

        return NextResponse.json({
            success: res.ok,
            slots: data.slots || [],
        });
    } catch (err: any) {
        return NextResponse.json(
            { error: true, message: err.message },
            { status: 500 }
        );
    }
}
