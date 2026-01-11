import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import "./globals.css";

export const metadata: Metadata = {
  title: "Fanvue App Starter",
  description: "Minimal Fanvue App example.",
  icons: {
    icon: "/logo192.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  const isRTL = currentLocale === 'ar';

  return (
    <html lang={currentLocale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className="antialiased font-sans"
        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
