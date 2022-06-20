import { ComparisonOperator } from "../../common/types/comparison-operator.type";

export const lt: ComparisonOperator<number> = (value: number) =>
  (element: number) => element < value;
