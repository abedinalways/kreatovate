import { NextResponse } from "next/server";

const GHL_BASE_URL =
  process.env.NEXT_PUBLIC_GHL_BASE_URL ||
  "https://services.leadconnectorhq.com";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!GHL_API_KEY) throw new Error("GHL_API_KEY is not configured");
    if (!GHL_LOCATION_ID) throw new Error("GHL_LOCATION_ID is not configured");
    if (!GHL_CALENDAR_ID)
      throw new Error(
        "GHL_CALENDAR_ID is missing — cannot create appointments"
      );

    // Validate form data
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        {
          error: true,
          message: "firstName, lastName, and email are required",
        },
        { status: 400 }
      );
    }

    // STEP 1 — CREATE CONTACT FIRST (required for appointment)
    const contactPayload = {
      locationId: GHL_LOCATION_ID,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      companyName: body.companyName,
      source: "Website - Consultation Form",
      tags: body.tags || ["Consultation Request"],
      customFields: body.customFields || [],
    };

    const contactResponse = await fetch(`${GHL_BASE_URL}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contactPayload),
    });

    const contactData = await contactResponse.json();

    if (!contactResponse.ok) {
      return NextResponse.json(
        {
          error: true,
          message: contactData.message || "Contact creation failed",
        },
        { status: 400 }
      );
    }

    const contactId = contactData.contact?.id || contactData.id;

    if (!contactId) {
      return NextResponse.json(
        { error: true, message: "Contact ID missing from GHL response" },
        { status: 500 }
      );
    }

    // STEP 2 — NOW TRY TO CREATE APPOINTMENTS
    const appointments = body.appointments || [];
    let failedError: string | null = null;

    for (const appointment of appointments) {
      const appointmentPayload = {
        title: `Consultation - ${body.firstName} ${body.lastName}`,
        calendarId: GHL_CALENDAR_ID,
        locationId: GHL_LOCATION_ID,
        contactId,
        startTime: appointment.startTime,
        endTime: appointment.endTime,
        timezone: appointment.timezone,
        appointmentStatus: "confirmed",
      };

      const res = await fetch(`${GHL_BASE_URL}/calendars/events/appointments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(appointmentPayload),
      });

      const resData = await res.json();

      if (!res.ok) {
        failedError =
          resData.message || resData.msg || "Failed to create appointment";

        break; // STOP processing more appointments
      }
    }

    // ❌ ERROR? DELETE CONTACT + RETURN FAILURE
    if (failedError) {
      await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: "2021-07-28",
        },
      });

      return NextResponse.json(
        {
          error: true,
          message: failedError,
        },
        { status: 400 }
      );
    }

    // SUCCESS RESPONSE
    return NextResponse.json({
      success: true,
      message: "Appointments successfully created.",
      contactId,
    });
  } catch (error: any) {
    console.error("GHL API ERROR:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
