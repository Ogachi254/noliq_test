import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

export default async function Dashboard() {
  const user = await currentUser();
  if (!user) return <div className="ml-64">Please sign in</div>;

  const bookings = await prisma.booking.findMany({
    where: { userId: user.id },
    include: { event: true },
  });

  return (
    <div className="ml-64 container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">Your Dashboard</h2>
      <h3 className="text-xl mb-4">Your Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id} className="mb-2">
              {booking.event.title} - {booking.event.date.toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
      <h3 className="text-xl mb-4 mt-6">Submit an Event</h3>
      <form action="/api/events/submit" method="POST" className="max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <input
          type="date"
          name="date"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="bg-accent text-dark py-2 px-4 rounded">
          Submit Event
        </button>
      </form>
    </div>
  );
}