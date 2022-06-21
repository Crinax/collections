import { comparison } from "./../logic/comparison.operator";

export const index = <T>(i: number) =>
  comparison<T>((_: T, ind: number) => i === ind);
