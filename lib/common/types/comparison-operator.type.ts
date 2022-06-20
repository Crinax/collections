import { ICollection } from "../interfaces/collection.interface";

export type ComparisonOperator<T> = (compared: T) => (
  comparisonObject: T,
  index: number,
  collection: ICollection<T>
) => boolean;