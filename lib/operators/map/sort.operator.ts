import { log } from "./../tap/log.operator";
import { slice } from "./../filter/slice.operator";
import { min } from "../find/min.operator";
import { max } from "../find/max.operator";
import { eq } from "./../logic/eq.operator";
import { ICollection } from "./../../common/interfaces/collection.interface";

export const sort =
  (direction: number) =>
  (_: number, index: number, collection: ICollection<number>) =>
    collection
      .filter(slice(index, collection.length))
      .findLeft(
        collection.length > 2
          ? Math.sign(direction) === -1
            ? max
            : min
          : () => true
      )
      .toArray()[0];
