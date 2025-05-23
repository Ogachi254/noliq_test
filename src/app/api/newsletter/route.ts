import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    await prisma.newsletter.create({
      data: { email },
    });
    return NextResponse.json({ message: 'Subscribed successfully' });
  } catch {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  }
}