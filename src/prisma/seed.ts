import prisma from '../lib/prisma';

async function seed() {
  await prisma.event.deleteMany();
  await prisma.booking.deleteMany();

  const pastEvents = [
    {
      title: 'Global Tech Summit 2024',
      description: 'A summit for tech enthusiasts.',
      date: new Date('2024-11-15'),
      location: 'New York, USA',
      category: 'past',
      image: '/images/tech-summit.jpg',
    },
    {
      title: 'Art Expo Paris 2024',
      description: 'Showcasing global art.',
      date: new Date('2024-09-10'),
      location: 'Paris, France',
      category: 'past',
      image: '/images/art-expo.jpg',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Global Summit 2025',
      description: 'Join global leaders in 2025.',
      date: new Date('2025-06-15'),
      location: 'Tokyo, Japan',
      category: 'upcoming',
      priceId: 'price_1RPh4YPIYQWKrbhotcKEwcJv',
      image: '/images/global-summit.jpg',
    },
  ];

  await prisma.event.createMany({
    data: [...pastEvents, ...upcomingEvents],
  });

  // Simulate a booked event for a user (replace with real Clerk userId after testing)
  const userId = 'user_test_123';
  const event = await prisma.event.findFirst({ where: { category: 'upcoming' } });
  if (event) {
    await prisma.booking.create({
      data: {
        eventId: event.id,
        userId,
      },
    });
    // Update event to booked category
    await prisma.event.update({
      where: { id: event.id },
      data: { category: 'booked' },
    });
  }

  console.log('Database seeded!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });