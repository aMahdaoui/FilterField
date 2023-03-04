import { RANGE_FILTERS } from '../config/constants';

/**
 * Get the updated value of the Filter, used after the user type/modify
 * the input field in InputFilterField component
 * @param value The new typed value
 * @param filterName The name of the filter
 * @param isFirstValue Reflect wether the updated value is related to the first input of RANGE_FILTERS
 * @param oldValues : Filter old values
 * @returns {array} Array of updated values
 */
export const revealValueBasedOnFilter = (
  value: string | number,
  filterName: string,
  isFirstValue: boolean,
  oldValues: (string | number)[]
): (string | number)[] => {
  const isRangeFilter = RANGE_FILTERS.includes(filterName);

  if (!isRangeFilter) return [value];
  return isFirstValue ? [value, oldValues[1]] : [oldValues[0], value];
};
