import ButtonCard from '@/components/ButtonCard';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function BookedEvents() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const bookings = await prisma.booking.findMany({
    where: { userId: user.id },
    include: { event: true },
  });

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Booked Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <ButtonCard
            key={booking.event.id}
            title={booking.event.title}
            description={booking.event.description ?? 'Get ready for this event!'}
            image={booking.event.image ?? '/images/default-event.jpg'}
            link={`/events/booked/${booking.event.id}`}
          />
        ))}
      </div>
    </div>
  );
}