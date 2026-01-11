import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es', 'ar', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  // This now gets the locale from the Next.js request context
  let locale = await requestLocale;

  // Ensure that a locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
