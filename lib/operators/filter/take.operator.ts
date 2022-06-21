import { comparison } from "./../logic/comparison.operator";

export const take = <T>(num: number) =>
  comparison<T>((_, index: number) => index < num - 1);
