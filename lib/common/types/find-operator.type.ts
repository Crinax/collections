import { ICollection } from "../interfaces/collection.interface";

export type FindOperator<T> = (
  element: T,
  index: number,
  collection: ICollection<T>
) => boolean;