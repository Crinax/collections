import { ICollection } from "../../common/interfaces/collection.interface";
import { lt } from "../logic/lt.operator";

export const min = (
  element: number,
  _: number,
  collection: ICollection<number>
) => collection.findLeft(lt(element)).length === 0;
