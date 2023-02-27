import { FILTERS, FILTER_NUMBER } from '../config/constants';
import { Filter, FilterOption, FilterType } from '../types';
import { FILTERS_BY_TYPE } from '../config/filters';

// get all filter by type (text|number|date)
export const getAllFiltersByType = (filterType: FilterType): Array<FilterOption> | [] => {
  return [...FILTERS_BY_TYPE[filterType].values()];
};

// get filter by type (number|text) and by filterType (EE|NE|CONTAINS...)
export const getFilterByType = (
  filterType: FilterType,
  filter: Filter
): FilterOption | undefined => {
  const filters = FILTERS_BY_TYPE[filterType];
  return filters.get(filter);
};

// get DEFAULT filter by type (number|text) and by filterType (EE|NE|CONTAINS...)
export const getDefaultFilterByType = (type: FilterType): string => {
  // Date Filters NOT yet handled
  // if (type === FILTER_DATE) return FILTERS.ON_DATE.filter;
  if (type === FILTER_NUMBER) return FILTERS.EE.filter;
  return FILTERS.CONTAINS.filter;
};
