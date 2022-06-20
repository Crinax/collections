import { ComparisonOperator } from "../../common/types/comparison-operator.type";

export const gt: ComparisonOperator<number> = (value: number) =>
  (element: number) => element > value;
