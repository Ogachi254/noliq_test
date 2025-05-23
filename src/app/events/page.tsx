import EventCard from '@/components/EventCard';
import ButtonCard from '@/components/ButtonCard';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export default async function Events() {
  // Fetch the current user for booked events
  const user = await currentUser();

  // Fetch past events
  const pastEvents = await prisma.event.findMany({
    where: { category: 'past' },
  });

  // Fetch booked events (if user is signed in)
  const bookings = user
    ? await prisma.booking.findMany({
        where: { userId: user.id },
        include: { event: true },
      })
    : [];

  // Fetch upcoming events
  const upcomingEvents = await prisma.event.findMany({
    where: { category: 'upcoming' },
  });

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Upcoming Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description ?? ''}
                date={event.date.toLocaleDateString()}
                location={event.location}
                category={event.category}
                priceId={event.priceId}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No upcoming events available.</p>
        )}
      </section>

      {/* Booked Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Booked Events</h2>
        {user ? (
          bookings.length > 0 ? (
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
          ) : (
            <p className="text-center text-gray-600">You haven’t booked any events yet.</p>
          )
        ) : (
          <p className="text-center text-gray-600">
            Please sign in to view your booked events.
          </p>
        )}
      </section>

      {/* Past Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Past Events</h2>
        {pastEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <ButtonCard
                key={event.id}
                title={event.title}
                description={event.description ?? 'Relive the moments!'}
                image={event.image ?? '/images/default-event.jpg'}
                link={`/events/past/${event.id}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No past events available.</p>
        )}
      </section>
    </div>
  );
}