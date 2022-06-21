import { comparison } from "./comparison.operator";
import { eq } from "./eq.operator";
import { ICollection } from "../../common/interfaces/collection.interface";

export const intersection = <T>(collection: ICollection<T>) =>
  comparison<T>((el) => collection.findLeft(eq<T>(el)).length === 0);
