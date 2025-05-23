import Link from 'next/link';

export default function Events() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          href="/events/past" 
          className="bg-white p-6 rounded shadow hover:bg-accent text-center"
        >
          Past Events
        </Link>
        <Link 
          href="/events/booked" 
          className="bg-white p-6 rounded shadow hover:bg-accent text-center"
        >
          Booked Events
        </Link>
        <Link 
          href="/events/upcoming" 
          className="bg-white p-6 rounded shadow hover:bg-accent text-center"
        >
          Upcoming Events
        </Link>
      </div>
    </div>
  );
}