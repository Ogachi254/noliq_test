import Link from 'next/link';

export default function Events() {
  return (
    <div className="ml-64 container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link 
          href="/events/past" 
          className="bg-white p-6 rounded-lg shadow-md hover:bg-accent transition-colors text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Past Events</h3>
          <p className="text-gray-600">Relive our previous successful events</p>
        </Link>
        
        <Link 
          href="/events/booked" 
          className="bg-white p-6 rounded-lg shadow-md hover:bg-accent transition-colors text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Booked Events</h3>
          <p className="text-gray-600">View your confirmed reservations</p>
        </Link>
        
        <Link 
          href="/events/upcoming" 
          className="bg-white p-6 rounded-lg shadow-md hover:bg-accent transition-colors text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          <p className="text-gray-600">Discover what&apos;s coming next</p>
        </Link>
      </div>
    </div>
  );
}
