// src/app/events/past/page.tsx
import ButtonCard from '@/components/ButtonCard';
import { getEventsByCategory } from '@/data/events';

export default function PastEvents() {
  const pastEvents = getEventsByCategory('past');

  return (
    <div className="ml-64 container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Past Events</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {pastEvents.map((event) => (
          <ButtonCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
            date={event.date}
            location={event.location}
            category={event.category}
            link={event.link || `/events/past/${event.id}`}
          />
        ))}
      </div>
    </div>
  );
}