// src/app/events/upcoming/page.tsx
import EventCard from '@/components/EventCard';
import { getEventsByCategory } from '@/data/events';

export default function UpcomingEvents() {
  const upcomingEvents = getEventsByCategory('upcoming');

  return (
    <div className="ml-64 container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {upcomingEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            category={event.category}
            priceId={event.priceId}
            image={event.image}
          />
        ))}
      </div>
      
      {/* Itinerary Section - Only shown if there are upcoming events */}
      {upcomingEvents.length > 0 && (
        <section className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Event Itinerary</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Day 1: Arrival & Sunset Intentions - Airport transfers, welcome snacks, gentle movement, journaling, sunset circle.</li>
            <li>Day 2: Table Mountain + Cold Plunge - Guided hike or cable car, group brunch, tidal pool cold plunge.</li>
            <li>Day 3: Robben Island & Market - Ferry tour, V&A Waterfront, evening group share.</li>
            <li>Day 4: Cape Peninsula Adventure - Scenic drive, picnic lunch, penguin visit, conscious photo walk, sunset circle.</li>
            <li>Day 5: Cape Town Food Essentials - Bo-Kaap walking tour, mixology session with native spices.</li>
            <li>Day 6: Into the Wild: Safari - Drive to Karoo cottage, bushwalk, bonfire storytelling.</li>
            <li>Day 7: Safari Awakening - Morning safari, nature journaling, optional massage, sundowner game drive.</li>
            <li>Day 8: Return & Closing Ceremony - Brunch, shopping, ocean swim, final sunset circle.</li>
            <li>Day 9: Departures - Gentle goodbye ritual, airport transfers.</li>
          </ul>
        </section>
      )}
    </div>
  );
}