import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// The middleware automatically:
// 1. Detects user's preferred locale from Accept-Language header
// 2. Stores the detected/selected locale in a cookie (NEXT_LOCALE)
// 3. Redirects users to their preferred locale on first visit
// 4. Respects manually selected locale (stored in cookie) on return visits
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - Next.js internals
  matcher: ['/', '/(tr|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
