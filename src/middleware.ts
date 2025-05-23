import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicRoutes = [
  '/',
  '/events',
  '/events/upcoming',
  '/events/booked',
  '/events/past',
  '/about',
  '/contact',
  '/api(.*)',
  '/sign-in(.*)', // Explicitly include sign-in route
  '/sign-up(.*)', // Explicitly include sign-up route
];

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  
  // If the route is not public and the user is not signed in, redirect to sign-in
  if (!isPublicRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};