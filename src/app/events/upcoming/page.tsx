import EventCard from '@/components/EventCard';
import prisma from '@/lib/prisma';

export default async function UpcomingEvents() {
  const events = await prisma.event.findMany({
    where: { category: 'upcoming' },
  });

  return (
    <div className="ml-64 container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      <div className="flex flex-wrap justify-center">
        {events.map((event) => (
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
    </div>
  );
}