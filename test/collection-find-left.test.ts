import { log } from "./../lib/operators/tap/log.operator";
import { ICollection } from "./../lib/common/interfaces/collection.interface";
import { sort } from "./../lib/operators/map/sort.operator";
import { Collection } from "../lib/collection/collection";

const collection = Collection.create<number>(
  1,
  10,
  3450,
  12,
  4,
  64,
  123,
  24,
  66,
  33,
  65
);

let result: ICollection<number>;
const timeA = process.hrtime.bigint();

result = collection.map(sort(-1));

process.stdout.write((process.hrtime.bigint() - timeA).toString() + "\n");

result.tap(log);
