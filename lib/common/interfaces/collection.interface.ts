import { FilterOperator } from "../types/filter-operator.type";
import { FindOperator } from "../types/find-operator.type";
import { MapOperator } from "../types/map-operator.type";
import { TapOperator } from "../types/tap-operator.type";

export interface ICollection<T> {
  find(
    fromIndex: number,
    toIndex: number,
    operator?: FindOperator<T>,
  ): ICollection<T>;
  findLeft(operator?: FindOperator<T>): ICollection<T>;
  findRight(operator?: FindOperator<T>): ICollection<T>;

  filter(operator?: FilterOperator<T>): ICollection<T>;
  map<Y = T>(operator: MapOperator<T, Y>): ICollection<Y>;
  tap(operator: TapOperator<T>): ICollection<T>;
  reverse(): ICollection<T>;
  union<Y = T>(other: ICollection<T>): ICollection<T | Y>;
  intersection(other: ICollection<T>): ICollection<T>;

  clone(): ICollection<T>;
  toArray(): T[];

  get length(): number;
}