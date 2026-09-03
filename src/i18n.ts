export type Lang = 'sk' | 'en';

export const getLang = (locale: string | undefined): Lang =>
  locale === 'en' ? 'en' : 'sk';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Locale prefix for a language ('' for the default locale, '/en' for English). */
const localePrefix = (lang: Lang): string => (lang === 'en' ? '/en' : '');

/**
 * URL of the Pouchy pre školy single page, base- and locale-aware.
 * `hash` is an optional in-page anchor, e.g. '#faq'.
 */
export const siteHref = (lang: Lang, hash = ''): string =>
  `${base}${localePrefix(lang)}/${hash}`;
