import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicRoutes = [
  '/',
  '/about',
  '/contact',
  '/events',
  '/events/past',
  '/events/upcoming',
  '/sign-in',
  '/sign-up',
  '/api(.*)',
];

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const isPublic = publicRoutes.some((route) => {
    const regex = new RegExp(`^${route.replace(/\.\*/, '.*')}$`);
    return regex.test(req.nextUrl.pathname);
  });

  if (!isPublic && !userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webm|mp4)).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};