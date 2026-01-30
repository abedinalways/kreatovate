/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { GHL_BASE_URL, ghlHeaders, requireEnv } from "@/lib/ghl";

function isISOWithOffset(s: string) {
  return typeof s === "string" &&
    /T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const locationId = requireEnv("GHL_LOCATION_ID");
    const calendarId = requireEnv("GHL_CALENDAR_ID");

    // Validate basic contact
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: true, message: "firstName, lastName, and email are required" },
        { status: 400 }
      );
    }

    // Validate appointment payload
    const startTime = body?.appointment?.startTime;
    const endTime = body?.appointment?.endTime;

    if (!startTime || !endTime) {
      return NextResponse.json(
        { error: true, message: "appointment.startTime and appointment.endTime are required" },
        { status: 400 }
      );
    }

    if (!isISOWithOffset(startTime) || !isISOWithOffset(endTime)) {
      return NextResponse.json(
        {
          error: true,
          message:
            "startTime/endTime must be ISO with timezone offset (example: 2021-06-23T03:30:00+05:30).",
        },
        { status: 400 }
      );
    }

    // STEP 1: upsert contact :contentReference[oaicite:7]{index=7}
    const contactPayload = {
      locationId,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      companyName: body.companyName || body.company,
      source: body.source || "Website - Consultation Form",
      tags: body.tags || ["Consultation Request"],
      customFields: body.customFields || [],
      timezone: body.timezone, // optional
    };

    const contactRes = await fetch(`${GHL_BASE_URL}/contacts/upsert`, {
      method: "POST",
      headers: ghlHeaders("2021-07-28"),
      body: JSON.stringify(contactPayload),
    });

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      return NextResponse.json(
        { error: true, message: contactData?.message || contactData?.msg || "Contact upsert failed" },
        { status: contactRes.status }
      );
    }

    const contactId = contactData?.contact?.id || contactData?.id;

    if (!contactId) {
      return NextResponse.json(
        { error: true, message: "Contact ID missing from GHL response" },
        { status: 500 }
      );
    }

    // STEP 2: create appointment :contentReference[oaicite:8]{index=8}
    const appointmentPayload = {
      title: `Consultation - ${body.firstName} ${body.lastName}`,
      calendarId,
      locationId,
      contactId,
      startTime,
      endTime,
      appointmentStatus: "confirmed",
    };

    const apptRes = await fetch(`${GHL_BASE_URL}/calendars/events/appointments`, {
      method: "POST",
      headers: ghlHeaders("2021-04-15"),
      body: JSON.stringify(appointmentPayload),
    });

    const apptData = await apptRes.json();

    if (!apptRes.ok) {
      return NextResponse.json(
        { error: true, message: apptData?.message || apptData?.msg || "Failed to create appointment" },
        { status: apptRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Appointment successfully created.",
      contactId,
      appointment: apptData,
    });
  } catch (error: any) {
    console.error("GHL API ERROR:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}