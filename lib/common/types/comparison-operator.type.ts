import { ICollection } from "../interfaces/collection.interface";

export type ComparisonFunction<T> = (
  comparisonObject: T,
  index: number,
  collection: ICollection<T>,
  ...args: T[]
) => boolean;
