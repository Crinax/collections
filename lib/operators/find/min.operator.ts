import { comparison } from "../logic/comparison.operator";
import { lt } from "../logic/lt.operator";

export const min = comparison<number>(
  (element, _, collection) => collection.findLeft(lt(element)).length === 0
);
