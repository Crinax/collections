import { ICollection } from "../interfaces/collection.interface";

export type MapOperator<T, Y> = (
  element: T,
  index: number,
  collection: ICollection<T>,
) => Y;