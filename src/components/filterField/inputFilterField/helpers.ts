export const extractFilterValueFromRangeValues = (
  value: string | number,
  isFirstValue: boolean,
  rangeValues: (string | number)[]
): (string | number)[] => {
  // const value1 = Number(rangeValues[0])
  // const value2 = parseInt(rangeValues[1], 10)
  return isFirstValue ? [value, rangeValues[1]] : [rangeValues[0], value];
};
