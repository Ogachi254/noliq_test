import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, description, date, location } = await request.json();

  try {
    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        category: 'upcoming',
        creatorId: user.id,
      },
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit event' }, { status: 500 });
  }
}