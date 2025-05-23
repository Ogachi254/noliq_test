import Link from 'next/link';
import Image from 'next/image';

interface ButtonCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ButtonCard({ title, description, image, link }: ButtonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <Image
        src={image}
        alt={title}
        width={400} // Adjust based on your image dimensions
        height={160}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link href={link} className="bg-accent text-dark py-2 px-4 rounded hover:bg-opacity-80 text-sm">
          Learn More
        </Link>
      </div>
    </div>
  );
}