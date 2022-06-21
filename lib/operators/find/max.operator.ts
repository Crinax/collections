import { comparison } from "./../logic/comparison.operator";
import { gt } from "../logic/gt.operator";

export const max = comparison<number>(
  (element, _, collection) => collection.findLeft(gt(element)).length === 0
);
