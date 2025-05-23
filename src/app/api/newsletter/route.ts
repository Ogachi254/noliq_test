import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const newsletter = await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({ success: true, newsletter }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to subscribe' }, { status: 500 });
  }
}