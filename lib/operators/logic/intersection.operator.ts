import { ICollection } from "../../common/interfaces/collection.interface";
import { element } from "../find/element.operator";

export const intersection =
  <T>(collection: ICollection<T>) =>
  (el: T) =>
    collection.findLeft(element(el)).length !== 0;
