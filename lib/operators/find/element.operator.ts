export const element =
  <T>(value: T) =>
  (element: T) =>
    value === element;
