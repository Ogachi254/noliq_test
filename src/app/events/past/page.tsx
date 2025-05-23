import ButtonCard from '@/components/ButtonCard';
import prisma from '@/lib/prisma';

export default async function PastEvents() {
  const events = await prisma.event.findMany({
    where: { category: 'past' },
  });

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <ButtonCard
            key={event.id}
            title={event.title}
            description={event.description ?? 'Relive the moments!'}
            image={event.image ?? '/images/default-event.jpg'}
            link={`/events/past/${event.id}`}
          />
        ))}
      </div>
    </div>
  );
}