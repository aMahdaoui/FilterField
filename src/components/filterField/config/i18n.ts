import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { SUPPORTED_LANGS } from './locales';
import enTranslation from '../../../locales/en/translation.json';
import frTranslation from '../../../locales/fr/translation.json';

const fallbackLng = ['en'];
const availableLanguages = Object.keys(SUPPORTED_LANGS);
const resources = {
  en: {
    translation: {
      filters: {
        EE: 'Equals english kj',
        NE: 'Does not equal',
        GT: 'Greater than',
        LT: 'Less than',
        GTE: 'Greater than or equal to',
        LTE: 'Less than or equal to',
        BETWEEN: 'Between',
        NOT_BETWEEN: 'Not between',
        CONTAINS: 'Contains english',
        NOT_CONTAINS: 'Not contains',
        IN: 'In',
        NOT_IN: 'Not in',
        ON_DATE: 'On this Date',
        ON_DATE_TIME: 'Date and Time',
        NOT_ON_DATE: 'Not on this Date',
        BEFORE_DATE_TIME: 'Before this Date and Time',
        AFTER_DATE_TIME: 'After this Date and Time',
        DATE_RANGE: 'Date and Time range',
      },
    },
  },
  fr: {
    translation: {
      filters: {
        EE: 'Equals - fr',
        NE: 'Does not equal - fr',
        GT: 'Greater than - fr',
        LT: 'Less than - fr',
        GTE: 'Greater than or equal to - fr',
        LTE: 'Less than or equal to - fr',
        BETWEEN: 'Between - fr',
        NOT_BETWEEN: 'Not between - fr',
        CONTAINS: 'Contains - fr',
        NOT_CONTAINS: 'Not contains - fr',
        IN: 'In - fr',
        NOT_IN: 'Not in - fr',
        ON_DATE: 'On this Date - fr',
        ON_DATE_TIME: 'Date and Time - fr',
        NOT_ON_DATE: 'Not on this Date - fr',
        BEFORE_DATE_TIME: 'Before this Date and Time - fr',
        AFTER_DATE_TIME: 'After this Date and Time - fr',
        DATE_RANGE: 'Date and Time range - fr',
      },
    },
  },
};

i18n
  //   .use(Backend)
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init(
    {
      // backend: {
      //     // for all available options read the backend's repository readme file
      //   loadPath: '/locales/{{lng}}/{{ns}}.json',
      // },
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
    }
    //   callback
  ),
  (err: any, t: any) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  };
// };

export default i18n;
