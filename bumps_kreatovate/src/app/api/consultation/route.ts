import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      company,
      email,
      service,
      message,
      selectedDates,
      timeZone,
    } = body;

    // Save to PostgreSQL
    const consultation = await prisma.consultation.create({
      data: {
        firstName,
        lastName,
        company,
        email,
        service,
        message,
        selectedDates: selectedDates ? JSON.stringify(selectedDates) : null,
        timeZone: timeZone || null,
      },
    });

    // ✅ Optional: Send email via your email provider
    console.log('New consultation saved:', consultation);

    return NextResponse.json(
      { message: 'Form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      {
        error:
          'Failed to process form. ' +
          (error instanceof Error ? error.message : ''),
      },
      { status: 500 }
    );
  }
}
