// add translation of filters names here

import i18n from '../../../config/i18n/i18n';

const translator = i18n.t;

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
    filter: 'EE',
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

export const ID_FILTER_INPUT = 'inputFilter';
// filters based on two values to perform filtring
// e.g get values BETWEEN number1 and number2
export const RANGE_FILTERS = ['BETWEEN', 'NOT_BETWEEN'];
export const ID_RANGE_FILTER_INPUT_1 = 'rangeFilter1';
export const ID_RANGE_FILTER_INPUT_2 = 'rangeFilter2';
