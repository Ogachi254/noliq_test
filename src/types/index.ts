export interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  location: string;
  category: string;
  priceId?: string;
  image?: string;
}

export interface Booking {
  id: number;
  eventId: number;
  userId: string;
  checkoutId?: string;
  event: Event;
}