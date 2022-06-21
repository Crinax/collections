import { comparison } from "./comparison.operator";
import { LikeLogicOperator } from "../../common/types/like-logic-operator.type";

export const or = <T>(...operators: LikeLogicOperator<T>[]) =>
  comparison<T>((element, index, collection) =>
    operators.some((operator) => operator(element, index, collection.clone()))
  );
