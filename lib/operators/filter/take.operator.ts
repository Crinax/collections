export const take =
  <T>(num: number) =>
  (_: T, index: number) =>
    index < num - 1;
