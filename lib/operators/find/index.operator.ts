export const index =
  <T>(i: number) =>
  (_: T, index: number) =>
    i === index;
