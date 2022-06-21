import { ICollection } from "../../common/interfaces/collection.interface";
import { LikeLogicOperator } from "../../common/types/like-logic-operator.operator";

export const and =
  <T>(...args: LikeLogicOperator<T>[]) =>
  (element: T, index: number, collection: ICollection<T>) =>
    args.every((fn) => fn(element, index, collection.clone()));
