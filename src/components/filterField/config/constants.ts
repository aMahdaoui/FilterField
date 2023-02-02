// add translation of filters names here

import i18n from './i18n';

const translator = i18n.t;
// console.log('holaa', i18n, translator('filters.EE'));

export const FILTERS = {
  EE: {
    filter: 'EE',
    name: translator('filters.EE'),
  },
  NE: {
    filter: 'NE',
    name: translator('filters.NE'),
  },
  GT: {
    filter: 'GT',
    name: translator('filters.GT'),
  },
  LT: {
    filter: 'LT',
    name: translator('filters.LT'),
  },
  GTE: {
    filter: 'GTE',
    name: translator('filters.GTE'),
  },
  LTE: {
    filter: 'LTE',
    name: translator('filters.LTE'),
  },
  BETWEEN: {
    filter: 'BETWEEN',
    name: translator('filters.BETWEEN'),
  },
  NOT_BETWEEN: {
    filter: 'NOT_BETWEEN',
    name: translator('filters.NOT_BETWEEN'),
  },
  CONTAINS: {
    filter: 'CONTAINS',
    name: translator('filters.CONTAINS'),
  },
  NOT_CONTAINS: {
    filter: 'NOT_CONTAINS',
    name: translator('filters.NOT_CONTAINS'),
  },
  IN: {
    filter: 'IN',
    name: translator('filters.IN'),
  },
  NOT_IN: {
    filter: 'NOT_IN',
    name: translator('filters.NOT_IN'),
  },
  ON_DATE: {
    filter: 'EE',
    name: translator('filters.ON_DATE'),
  },
  ON_DATE_TIME: {
    filter: 'BETWEEN',
    name: translator('filters.ON_DATE_TIME'),
  },
  BEFORE_DATE_TIME: {
    filter: 'LT',
    name: translator('filters.BEFORE_DATE_TIME'),
  },
  AFTER_DATE_TIME: {
    filter: 'GT',
    name: translator('filters.AFTER_DATE_TIME'),
  },
  NOT_ON_DATE: {
    filter: 'NE',
    name: translator('filters.NOT_ON_DATE'),
  },
  DATE_RANGE: {
    filter: 'BETWEEN',
    name: translator('filters.DATE_RANGE'),
  },
};

export const FILTER_TEXT = 'text';
export const FILTER_NUMBER = 'number';
export const FILTER_DATE = 'date';

// export const FILTERS = {
//   EE: {
//     filter: 'EE',
//     name: translator('filters.EE'),
//   },
//   NE: {
//     filter: 'NE',
//     name: 'Does not equal',
//   },
//   GT: {
//     filter: 'GT',
//     name: 'Greater than',
//   },
//   LT: {
//     filter: 'LT',
//     name: 'Less than',
//   },
//   GTE: {
//     filter: 'GTE',
//     name: 'Greater than or equal to',
//   },
//   LTE: {
//     filter: 'LTE',
//     name: 'Less than or equal to',
//   },
//   BETWEEN: {
//     filter: 'BETWEEN',
//     name: 'Between',
//   },
//   NOT_BETWEEN: {
//     filter: 'NOT_BETWEEN',
//     name: 'Not between',
//   },
//   CONTAINS: {
//     filter: 'CONTAINS',
//     name: 'Contains',
//   },
//   NOT_CONTAINS: {
//     filter: 'NOT_CONTAINS',
//     name: 'Does not contains',
//   },
//   IN: {
//     filter: 'IN',
//     name: 'In',
//   },
//   NOT_IN: {
//     filter: 'NOT_IN',
//     name: 'Not in',
//   },
//   ON_DATE: {
//     filter: 'EE',
//     name: 'On this Date',
//   },
//   ON_DATE_TIME: {
//     filter: 'BETWEEN',
//     name: 'On this Date and Time',
//   },
//   BEFORE_DATE_TIME: {
//     filter: 'LT',
//     name: 'Before this Date and Time',
//   },
//   AFTER_DATE_TIME: {
//     filter: 'GT',
//     name: 'After this Date and Time',
//   },
//   NOT_ON_DATE: {
//     filter: 'NE',
//     name: 'Not on this Date',
//   },
//   DATE_RANGE: {
//     filter: 'BETWEEN',
//     name: 'Date and Time range',
//   },
// };
