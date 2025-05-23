// src/app/events/booked/page.tsx
import ButtonCard from '@/components/ButtonCard';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { getEventsByCategory } from '@/data/events';

export default async function BookedEvents() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const bookedEvents = getEventsByCategory('booked');

  return (
    <div className="ml-64 container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Booked Events</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {bookedEvents.map((event) => (
          <ButtonCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
            date={event.date}
            location={event.location}
            category={event.category}
            link={event.link || `/events/booked/${event.id}`}
          />
        ))}
      </div>
    </div>
  );
}