import { RANGE_FILTER } from '../config/constants';

export const extractFilterValueFromRangeValues = (
  value: string | number,
  isFirstValue: boolean,
  isRangeFilter: boolean,
  rangeValues: (string | number)[]
): (string | number)[] => {
  // const value1 = Number(rangeValues[0])
  // const value2 = parseInt(rangeValues[1], 10)

  if (!isRangeFilter) return [value];
  return isFirstValue ? [value, rangeValues[1]] : [rangeValues[0], value];
};
export const revealValueBasedOnFilter = (
  value: string | number,
  filter: string,
  isFirstValue: boolean,
  oldValues: (string | number)[]
): (string | number)[] => {
  const isRangeFilter = RANGE_FILTER.includes(filter);

  if (!isRangeFilter) return [value];
  return isFirstValue ? [value, oldValues[1]] : [oldValues[0], value];
};
