import { min } from "../lib/operators/find/min.operator";
import { gt } from "../lib/operators/logic/gt.operator";
import { Collection } from "../lib/collection/collection";
import { ICollection } from "../lib/common/interfaces/collection.interface";
import { log } from "../lib/operators/tap";

const collection = Collection.create<number>(
  ...Array.from({ length: 21 }, (_, k) => k)
);

let result: ICollection<number>;

console.time();

result = collection.filter(gt(5));
collection.findLeft(min);

console.timeEnd();

result.tap(log);
