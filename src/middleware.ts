import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const publicRoutes = [
  '/',
  '/events',
  '/events/upcoming',
  '/events/booked',
  '/events/past',
  '/events/:category/:id',
  '/api(.*)',
  '/about',
  '/contact',
];

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // Await the auth() promise

  // If the route is not public and the user is not signed in, redirect to sign-in
  if (!isPublicRoute(req) && !userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return Response.redirect(signInUrl);
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};