import { comparison } from "./comparison.operator";
import { LikeLogicOperator } from "../../common/types/like-logic-operator.type";

export const and = <T>(...args: LikeLogicOperator<T>[]) =>
  comparison<T>((element, index, collection) =>
    args.every((fn) => fn(element, index, collection.clone()))
  );
