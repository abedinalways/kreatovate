import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    if (!date) {
        return NextResponse.json({ error: "date required" }, { status: 400 });
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_GHL_BASE_URL}/calendars/${process.env.GHL_CALENDAR_ID}/available-slots?date=${date}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.GHL_API_KEY}`,
                Version: "2021-07-28",
            },
        }
    );

    const data = await res.json();
    return NextResponse.json(data);
}
