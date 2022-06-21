import { ICollection } from "../../common/interfaces/collection.interface";
import { LikeLogicOperator } from "../../common/types/like-logic-operator.operator";

export const or =
  <T>(...args: LikeLogicOperator<T>[]) =>
  (element: T, index: number, collection: ICollection<T>) =>
    args.some((fn) => fn(element, index, collection.clone()));
