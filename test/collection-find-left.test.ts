import { Collection } from "../lib/collection/collection";
import { even } from "../lib/operators/math/even.operator";
import { mod } from "../lib/operators/math/mod.operator";
import { intersection } from "../lib/operators/logic/intersection.operator";
import { ICollection } from "../lib/common/interfaces/collection.interface";
import { reverse } from "../lib/operators/map";
import { log } from "../lib/operators/tap";

const collection = Collection.create<number>(
  ...Array.from({ length: 2000 }, (_, k) => k),
);
const square = (num: number) => num ** 2;
const cube = (num: number) => num ** 3;
let result: ICollection<number>;

console.time();

result = collection
  .map(square)
  .intersection(collection.map(cube));

console.timeEnd();

result.tap(log);