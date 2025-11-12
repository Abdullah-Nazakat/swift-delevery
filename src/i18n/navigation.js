// import { createNavigation } from 'next-intl/navigation';

// // 1. Define your supported locales
// const locales = ['en', 'grc', 'fr']; // <-- Update this with your actual locales
// const defaultLocale = 'en'; // <-- Update this with your default locale

// export const {Link, redirect, usePathname, useRouter, getPathname} =
//   createNavigation({
//     locales,
//     defaultLocale,
//     // Optional: Add `pathnames` here if you use localized URLs (e.g., '/about' vs '/de/ueber-uns')
//     // pathnames: { ... }
//   });


// i18n/navigation.js
import { createNavigation } from 'next-intl/navigation';

const locales = ['en', 'grc', 'fr'];
const defaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    defaultLocale,
    localePrefix: 'as-needed' // Add this line
  });