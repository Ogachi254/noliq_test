import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

interface EventCardProps {
  id: number;
  title: string;
  description?: string;
  date: string;
  location: string;
  category: string;
  priceId?: string;
}

export default function EventCard({
  id,
  title,
  description,
  date,
  location,
  category,
  priceId,
}: EventCardProps) {
  const { isSignedIn } = useUser();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-80">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm">Date: {date}</p>
      <p className="text-sm">Location: {location}</p>
      {priceId && isSignedIn && (
        <form action={`/api/stripe/checkout`} method="POST">
          <input type="hidden" name="priceId" value={priceId} />
          <button
            type="submit"
            className="mt-4 bg-accent text-dark py-2 px-4 rounded hover:bg-opacity-80"
          >
            Book Now
          </button>
        </form>
      )}
      <Link href={`/events/${category}/${id}`} className="text-sm text-accent hover:underline">
        View Details
      </Link>
    </div>
  );
}