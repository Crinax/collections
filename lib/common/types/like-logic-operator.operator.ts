import { ICollection } from "../interfaces/collection.interface";

export type LikeLogicOperator<T> = (
  element: T,
  index: number,
  collection: ICollection<T>
) => boolean;