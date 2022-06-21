import { ICollection } from "../../common/interfaces/collection.interface";

export const reverse = <T>(_: T, i: number, collection: ICollection<T>) =>
  collection
    .findRight((_, index) => index === collection.length - i - 1)
    .toArray()[0];
