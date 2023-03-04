import { FILTERS, FILTER_NUMBER } from '../config/constants';
import { FilterName, FilterOption, FilterType } from '../types';
import { FILTERS_BY_TYPE } from '../config/filters';


/**
 * Get all filters by type (text|number|date)
 * @param filterType The type of the filter (number|text)
 * @returns {array} Array of filters available for the specified type
 */
export const getAllFiltersByType = (filterType: FilterType): Array<FilterOption> | [] => {
  return [...FILTERS_BY_TYPE[filterType].values()];
};

/**
 * Get filter properties based on the type of the filter and its name
 * @param filterType The type of the filter (number|text)
 * @param filterName The name of the filter  (EE|NE|CONTAINS...)
 * @returns {object} Object contains all filter properties (name, filter, icon, ...)
 */
export const getFilterPropertiesByType = (
  filterType: FilterType,
  filterName: FilterName
): FilterOption | undefined => {
  const filters = FILTERS_BY_TYPE[filterType];
  return filters.get(filterName);
};

/**
 * Get DEFAULT filter based on its type
 * @param filterType The type of the filter (number|text)
 * @returns {string} The default filter name
 */
export const getDefaultFilterByType = (filterType: FilterType): string => {
  // Date Filters NOT yet handled
  // if (type === FILTER_DATE) return FILTERS.ON_DATE.filter;
  if (filterType === FILTER_NUMBER) return FILTERS.EE.filter;
  return FILTERS.CONTAINS.filter;
};
