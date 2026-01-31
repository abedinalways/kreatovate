import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GHL_BASE_URL}/contacts/upsert`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locationId: process.env.GHL_LOCATION_ID,
          ...body,
        }),
      },
    );

    const data = await response.json();

    console.log('GHL DATA', data);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: true,
          message: data.msg || data.error,
        },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: true, message: errorMessage },
      { status: 500 },
    );
  }
}
