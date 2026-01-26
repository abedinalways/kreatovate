import { NextResponse } from "next/server";
import { GHL_BASE_URL, requireEnv } from "@/lib/ghl";

export async function GET() {
    try {
        const calendarId = requireEnv("GHL_CALENDAR_ID");
        const apiKey = requireEnv("GHL_API_KEY");

        const res = await fetch(
            `${GHL_BASE_URL}/calendars/${calendarId}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    Version: "2021-04-15",
                    Accept: "application/json",
                },
            }
        );

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json(
                { error: true, message: "Failed to load calendar" },
                { status: res.status }
            );
        }

        // assignedUsers / teamMembers are the key
        const users =
            data?.assignedUsers ||
            data?.teamMembers ||
            data?.users ||
            [];

        return NextResponse.json({
            success: true,
            users,
        });
    } catch (e: any) {
        return NextResponse.json(
            { error: true, message: e.message },
            { status: 500 }
        );
    }
}
