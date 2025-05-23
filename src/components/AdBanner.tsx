import Link from 'next/link';

export default async function AdBanner() {
  const event = {
    title: 'Cape Town Sober Adventure',
    date: 'November 2nd-9th, 2025',
    location: 'Cape Town, South Africa',
    id: 1,
  };

  return (
    <div className="bg-accent text-dark py-3 px-4 text-center">
      <Link 
        href={`/events/upcoming/${event.id}`}
        className="group block hover:bg-accent-dark transition-colors duration-200"
      >
        <div className="text-lg font-medium">
          Ready to say yes to clarity, connection, and unforgettable adventure?
        </div>
        <div className="mt-1 text-md">
          Join us in {event.location} for {event.title} - {event.date}
        </div>
        <div className="mt-1 text-sm underline underline-offset-4 group-hover:no-underline">
          Learn more and reserve your spot →
        </div>
      </Link>
    </div>
  );
}