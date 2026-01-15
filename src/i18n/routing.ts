import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // Only show locale prefix for non-default locale
  localeDetection: true, // Detect locale from Accept-Language header
});

// Lightweight wrappers around Next.js' navigation APIs
// that handle locale prefixes automatically
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
