import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SUPPORTED_LANGS } from '../global';
import enTranslations from './languages/english.json';
import frTranslations from './languages/french.json';

const fallbackLng = ['en'];
const availableLanguages = Object.keys(SUPPORTED_LANGS);
const resources = {
  en: enTranslations,
  fr: frTranslations,
};

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    keySeparator: '.',
    lng: 'en',
    fallbackLng,
    returnObjects: true,
    debug: false,
    // whitelist: availableLanguages,
    supportedLngs: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  }),
  (err: any, t: any) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  };

export default i18n;
