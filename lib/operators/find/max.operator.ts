import { ICollection } from "../../common/interfaces/collection.interface";
import { gt } from "../logic/gt.operator";

export const max = (
  element: number,
  _: number,
  collection: ICollection<number>
) => collection.findLeft(gt(element)).length === 0;
