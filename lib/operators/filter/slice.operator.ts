import { comparison } from "./../logic/comparison.operator";

export const slice = <T>(from: number, to: number) =>
  comparison<T>((_, index) => index < to && index >= from);
