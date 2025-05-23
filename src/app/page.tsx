import VideoHero from '@/components/VideoHero';
import AdBanner from '@/components/AdBanner';
import ButtonCard from '@/components/ButtonCard';
import Newsletter from '@/components/Newsletter';
import prisma from '@/lib/prisma';

export default async function Home() {
  const events = await prisma.event.findMany({
    where: { category: 'upcoming' },
    take: 3,
  });

  return (
    <div>
      <AdBanner />
      <VideoHero />
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Discover Global Events</h2>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
          Join us for unforgettable experiences around the world. From tech summits to cultural expos, EventSphere brings
          you closer to the action.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {events.map((event) => (
            <ButtonCard
              key={event.id}
              title={event.title}
              description={event.description ?? 'Join this exciting event!'}
              image={event.image ?? '/images/default-event.jpg'}
              link={`/events/upcoming/${event.id}`}
            />
          ))}
        </div>
      </section>
      <Newsletter />
    </div>
  );
}