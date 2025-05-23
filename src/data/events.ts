// src/data/events.ts
export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  category: 'upcoming' | 'booked' | 'past';
  link?: string;
  priceId?: string;
}

export const allEvents: Event[] = [
  {
    id: 1,
    title: 'Sober Sojourn: Cape Town',
    description: 'Join us for an unforgettable experience in Cape Town, South Africa!',
    date: 'November 2-9, 2025',
    location: 'Cape Town, South Africa',
    category: 'upcoming',
    image: '/images/cape-town.jpg',
    priceId: 'price_1RPh4YPIYQWKrbhotcKEwcJv',
    link: '/events/upcoming'
  },
  {
    id: 2,
    title: 'Global Tech Summit 2024',
    description: 'A summit for tech enthusiasts.',
    date: 'November 15, 2024',
    location: 'New York, USA',
    category: 'past',
    image: 'https://via.placeholder.com/400x200',
    link: '/events/past/2'
  },
  {
    id: 3,
    title: 'Art Expo Paris 2024',
    description: 'Showcasing global art.',
    date: 'September 10, 2024',
    location: 'Paris, France',
    category: 'booked',
    image: 'https://via.placeholder.com/400x200',
    link: '/events/booked/3'
  },
  {
    id: 4,
    title: 'Wellness Retreat Bali 2024',
    description: 'A journey to inner peace.',
    date: 'October 5, 2024',
    location: 'Bali, Indonesia',
    category: 'booked',
    image: 'https://via.placeholder.com/400x200',
    link: '/events/booked/4'
  },
  {
    id: 5,
    title: 'Music Festival Berlin 2024',
    description: 'Vibrant music and culture.',
    date: 'August 20, 2024',
    location: 'Berlin, Germany',
    category: 'booked',
    image: 'https://via.placeholder.com/400x200',
    link: '/events/booked/5'
  },
  {
  id: 6,
  title: 'Innovation Week Tokyo 2024',
  description: 'Explore the future of tech in Tokyo.',
  date: 'July 12, 2024',
  location: 'Tokyo, Japan',
  category: 'past',
  image: '/images/tokyo-innovation.jpg',
  link: '/events/past/6'
},
{
  id: 7,
  title: 'Cultural Carnival Rio 2024',
  description: 'A colorful celebration of culture.',
  date: 'June 18, 2024',
  location: 'Rio de Janeiro, Brazil',
  category: 'past',
  image: '/images/rio-carnival.jpg',
  link: '/events/past/7'
}

];

export const getEventsByCategory = (category: Event['category']) => {
  return allEvents.filter(event => event.category === category);
};