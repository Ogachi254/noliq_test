import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { title, description, date, location, category } = await req.json();

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        category,
      },
    });

    return NextResponse.json({ success: true, event }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to create event' }, { status: 500 });
  }
}