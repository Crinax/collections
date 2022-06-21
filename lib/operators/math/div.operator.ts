export const div = (divider: number, wholePart: number) => (num: number) =>
  Math.trunc(num / divider) === wholePart;
