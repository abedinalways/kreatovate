import { NextResponse } from "next/server";
import { GHL_BASE_URL, ghlHeaders, requireEnv } from "@/lib/ghl";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const locationId = requireEnv("GHL_LOCATION_ID");

    const response = await fetch(`${GHL_BASE_URL}/contacts/upsert`, {
      method: "POST",
      headers: ghlHeaders("2021-07-28"),
      body: JSON.stringify({ locationId, ...body }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: true, message: data?.message || data?.msg || data?.error || "Upsert failed" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: true, message: error.message },
      { status: 500 }
    );
  }
}
