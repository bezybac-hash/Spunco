'use client';

import { useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';
import { locales, type Locale } from '@/i18n/request';
import { setLocale } from '@/lib/locale-actions';

const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ar: 'العربية',
  fr: 'Français'
};

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const t = useTranslations('LanguageSwitcher');
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  async function onSelectChange(locale: Locale) {
    startTransition(async () => {
      await setLocale(locale);
      window.location.reload();
    });
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-black/[.08] dark:border-white/[.145] bg-white dark:bg-black px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-black/[.05] dark:hover:bg-white/[.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        aria-label={t('label')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
            fill="currentColor"
          />
        </svg>
        <span>{languageNames[currentLocale]}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-black border border-black/[.08] dark:border-white/[.145] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  onSelectChange(locale);
                  setIsOpen(false);
                }}
                className={`${
                  currentLocale === locale
                    ? 'bg-black/[.05] dark:bg-white/[.06]'
                    : ''
                } block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-black/[.05] dark:hover:bg-white/[.06]`}
                role="menuitem"
              >
                {languageNames[locale]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
