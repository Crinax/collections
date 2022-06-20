import { min } from "../lib/operators/find/min.operator";
import { max } from "../lib/operators/find/max.operator";
import { gt } from "../lib/operators/logic/gt.operator";
import { lt } from "../lib/operators/logic/lt.operator";
import { Collection } from "../lib/collection/collection";
import { ICollection } from "../lib/common/interfaces/collection.interface";
import { log } from "../lib/operators/tap";
import { and } from "../lib/operators/logic/and.operator";
import { or } from "../lib/operators/logic/or.operator";

const collection = Collection.create<number>(
  ...Array.from({ length: 21 }, (_, k) => k)
);

let result: ICollection<number>;

console.time();

result = collection
  .filter(or(min, gt(5)))
  .take(1);

console.timeEnd();

result.tap(log);
