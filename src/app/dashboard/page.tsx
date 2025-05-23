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
    </div>
  );
}