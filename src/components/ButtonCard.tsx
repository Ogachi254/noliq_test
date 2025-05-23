// src/components/ButtonCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface ButtonCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  category: string;
  link: string;
}

export default function ButtonCard({
  id,
  title,
  description,
  image,
  date,
  location,
  category,
  link,
}: ButtonCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden w-80 m-4 transition-transform hover:scale-105"
      data-event-id={id}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-sm text-gray-600 mb-2 capitalize">Category: {category}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          href={link} 
          className="block text-center bg-accent text-dark py-2 px-4 rounded hover:bg-opacity-80 text-sm transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}