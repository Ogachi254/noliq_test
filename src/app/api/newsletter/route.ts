import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    await prisma.newsletter.create({
      data: { email },
    });
    return NextResponse.json({ message: 'Subscribed successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}