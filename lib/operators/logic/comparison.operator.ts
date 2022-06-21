import { ComparisonFunction } from "./../../common/types/comparison-operator.type";
import { ICollection } from "./../../common/interfaces/collection.interface";

export const comparison =
  <T>(comparisonFunction: ComparisonFunction<T>) =>
  (element: T, index: number, collection: ICollection<T>) =>
    comparisonFunction(element, index, collection);
