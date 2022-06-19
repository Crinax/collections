import { ICollection } from "../interfaces/collection.interface";

export type FilterOperator<T> = (
  element: T,
  index: number,
  collection: ICollection<T>
) => boolean;