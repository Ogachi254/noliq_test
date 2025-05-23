// src/app/page.tsx
import VideoHero from '@/components/VideoHero';
import AdBanner from '@/components/AdBanner';
import ButtonCard from '@/components/ButtonCard';
import Newsletter from '@/components/Newsletter';
import { getEventsByCategory } from '@/data/events';

export default function Home() {
  const upcomingEvents = getEventsByCategory('upcoming');
  const bookedEvents = getEventsByCategory('booked');
  const pastEvents = getEventsByCategory('past'); // ✅ Add this line

  return (
    <div>
      <AdBanner />
      <VideoHero />
      
      {/* Upcoming Events Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {upcomingEvents.map((event) => (
            <ButtonCard
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              image={event.image}
              date={event.date}
              location={event.location}
              category={event.category}
              link={event.link || `/events/upcoming/${event.id}`}
            />
          ))}
        </div>
      </section>

      {/* Booked Events Section */}
      <section className="container mx-auto py-12 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Booked Events</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {bookedEvents.slice(0, 3).map((event) => (
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
      </section>

      {/* Past Events Section */}
      <section className="container mx-auto py-12 px-4">
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
      </section>

      <Newsletter />
    </div>
  );
}
