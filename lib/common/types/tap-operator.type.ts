import { ICollection } from "../interfaces/collection.interface";

export type TapOperator<T> = (
  element: T,
  index: number,
  collection: ICollection<T>,
) => unknown;