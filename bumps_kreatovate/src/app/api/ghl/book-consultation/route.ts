/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

const GHL_BASE_URL =
  process.env.NEXT_PUBLIC_GHL_BASE_URL ||
  "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

interface AppointmentData {
  startTime: string;
  endTime: string;
  timezone: string;
}

interface ConsultationRequest {
  locationId?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  source?: string;
  tags?: string[];
  customFields?: Array<{
    key: string;
    field_value: string;
  }>;
  appointments?: AppointmentData[];
}

export async function POST(req: Request) {
  try {
    const body: ConsultationRequest = await req.json();

    // Validate environment variables
    if (!GHL_API_KEY) {
      throw new Error("GHL_API_KEY is not configured");
    }

    if (!GHL_LOCATION_ID) {
      throw new Error("GHL_LOCATION_ID is not configured");
    }

    if (!GHL_CALENDAR_ID) {
      console.warn(
        "GHL_CALENDAR_ID is not configured - appointments will not be created"
      );
    }

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: true, message: "firstName, lastName, and email are required" },
        { status: 400 }
      );
    }

    // Step 1: Create or Update Contact
    const contactPayload = {
      locationId: body.locationId || GHL_LOCATION_ID,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      companyName: body.companyName,
      source: body.source || "Website - Consultation Form",
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
      throw new Error(
        `Contact creation failed: ${
          contactData.message || contactData.msg || JSON.stringify(contactData)
        }`
      );
    }

    const contactId = contactData.contact?.id || contactData.id;

    if (!contactId) {
      throw new Error("No contact ID returned from GHL");
    }

    // Step 2: Create Appointments using the CORRECT endpoint
    const appointments = body.appointments || [];
    const createdAppointments = [];

    if (appointments.length > 0 && GHL_CALENDAR_ID) {
      for (const [index, appointment] of appointments.entries()) {
        try {
          const description = `Consultation Request:
• Name: ${body.firstName} ${body.lastName}
• Company: ${body.companyName || "N/A"}
• Email: ${body.email}
• Phone: ${body.phone || "N/A"}
• Service: ${body.tags?.[1] || "Consultation"}

Booked through website consultation form.`;

          // Use the CORRECT payload structure from GHL documentation
          const appointmentPayload = {
            title: `Consultation - ${body.firstName} ${body.lastName}`,
            calendarId: GHL_CALENDAR_ID,
            locationId: GHL_LOCATION_ID,
            contactId: contactId,
            startTime: appointment.startTime,
            endTime: appointment.endTime,
            description: description,
          };

          // Use the CORRECT endpoint from GHL documentation
          const appointmentResponse = await fetch(
            `${GHL_BASE_URL}/calendars/events/appointments`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${GHL_API_KEY}`,
                Version: "2021-04-15", // Use the version from GHL docs
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(appointmentPayload),
            }
          );

          const appointmentData = await appointmentResponse.json();

          if (appointmentResponse.ok) {
            createdAppointments.push({
              success: true,
              id: appointmentData.id || appointmentData.appointmentId,
              startTime: appointment.startTime,
              endTime: appointment.endTime,
            });
          } else {
            console.error(`Appointment ${index + 1} failed:`, appointmentData);
            createdAppointments.push({
              error: true,
              message:
                appointmentData.message ||
                appointmentData.msg ||
                "Appointment creation failed",
              details: appointmentData,
            });
          }
        } catch (appointmentError: any) {
          console.error(`Appointment ${index + 1} error:`, appointmentError);
          createdAppointments.push({
            error: true,
            message: appointmentError.message,
          });
        }
      }
    } else {
      console.log("No appointments to create or calendar ID missing");
    }

    const response = {
      success: true,
      contact: {
        id: contactId,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      },
      appointments: createdAppointments,
      message: `Contact created${
        appointments.length > 0 ? " with appointments" : ""
      }`,
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error("=== GHL API ERROR ===");
    console.error(error);
    return NextResponse.json(
      {
        error: true,
        message: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
