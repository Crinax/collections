import { comparison } from "./comparison.operator";
import { LikeLogicOperator } from "./../../common/types/like-logic-operator.operator";

export const not = <T>(operator: LikeLogicOperator<T>) =>
  comparison<T>(
    (element, index, collection) => !operator(element, index, collection)
  );
