import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import stripe from '@/lib/stripe';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { priceId } = await req.json();
    if (!priceId) {
      return NextResponse.json({ error: 'Price ID is required' }, { status: 400 });
    }

    // Check if user exists in the database, create if not
    const existingUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    if (!existingUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Service Fee',
            },
            unit_amount: 500, // $5 additional fee
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/events/upcoming`,
      metadata: {
        userId: user.id,
        eventId: '1', // Hardcoded for the single upcoming event
      },
    });

    // Save booking to database
    await prisma.booking.create({
      data: {
        eventId: 1,
        userId: user.id,
        checkoutId: session.id,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch {
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}