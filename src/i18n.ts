export type Lang = 'sk' | 'en';

export const getLang = (locale: string | undefined): Lang =>
  locale === 'en' ? 'en' : 'sk';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Root URL of the page in the given language (base-aware). */
export const homeHref = (lang: Lang): string =>
  lang === 'en' ? `${base}/en/` : `${base}/`;
