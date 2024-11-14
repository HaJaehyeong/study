import 'server-only';

// NOTE(hajae): 참고 https://nextjs-ko.org/docs/app/building-your-application/routing/internationalization
const dictionaries = {
  en: () => import('./[lang]/dictionaries/en.json').then((module) => module.default),
  ko: () => import('./[lang]/dictionaries/ko.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    throw new Error(`Locale '${locale}' not supported`);
  }
  return dictionaryLoader();
};
