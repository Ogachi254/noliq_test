import { NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { priceId } = await request.json();
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/upcoming`,
      metadata: { userId: user.id },
    });

    // Save booking to database
    const event = await prisma.event.findFirst({ where: { priceId } });
    if (event) {
      await prisma.booking.create({
        data: {
          eventId: event.id,
          userId: user.id,
        },
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}