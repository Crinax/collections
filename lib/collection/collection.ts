import { FilterOperator } from "../common/types/filter-operator.type";
import { ICollection } from "../common/interfaces/collection.interface";
import { FindOperator } from "../common/types/find-operator.type";
import { MapOperator } from "../common/types/map-operator.type";
import { TapOperator } from "../common/types/tap-operator.type";
import { blank } from "../operators/unknown";

export class Collection<T> implements ICollection<T> {
  protected constructor(collection: T[]) {
    this.#_collection = collection;
  }

  #_collection: T[];

  public filter(operator: FilterOperator<T> = blank): ICollection<T> {
    const result: T[] = [];
    const collectionLength = this.#_collection.length;

    for (let i = 0; i < collectionLength; i++) {
      const element = this.#_collection[i];

      if (operator(element, i, this.clone())) {
        result.push(element);
      }
    }

    return Collection.create<T>(...result);
  }

  public find(
    fromIndex: number,
    toIndex: number,
    operator: FindOperator<T> = blank
  ): ICollection<T> {
    let step = 1;
    const predicate = (i: number, direction: number, to: number) =>
      direction < 0 ? i > to : i < to;

    if (toIndex < fromIndex) {
      step = -1;
    }

    for (let i = fromIndex; predicate(i, step, toIndex); i += step) {
      const element = this.#_collection[i];

      if (operator(element, i, this.clone())) {
        return Collection.create<T>(element);
      }
    }

    return Collection.create<T>();
  }

  public findLeft(operator: FindOperator<T> = blank): ICollection<T> {
    return this.find(0, this.#_collection.length, operator);
  }

  public findRight(operator: FindOperator<T> = blank): ICollection<T> {
    return this.find(this.#_collection.length - 1, -1, operator);
  }

  public map<Y = T>(operator: MapOperator<T, Y>): ICollection<Y> {
    const result: Y[] = [];
    const collectionLength = this.#_collection.length;

    for (let i = 0; i < collectionLength; i++) {
      result.push(operator(this.#_collection[i], i, this.clone()));
    }

    return Collection.create<Y>(...result);
  }

  public tap(operator: TapOperator<T>) {
    const collectionLength = this.#_collection.length;

    for (let i = 0; i < collectionLength; i++) {
      operator(this.#_collection[i], i, this.clone());
    }

    return this.clone();
  }

  public reverse(): ICollection<T> {
    const result: T[] = [];
    const collectionLength = this.#_collection.length;

    for (let i = 0; i < collectionLength; i++) {
      result.unshift(this.#_collection[i]);
    }

    return Collection.create<T>(...result);
  }

  public union<Y = T>(other: ICollection<Y>): ICollection<T | Y> {
    return Collection.create<T | Y>(...this.toArray(), ...other.toArray());
  }

  public intersection(other: ICollection<T>): ICollection<T> {
    const result: T[] = [];
    const otherArray: T[] = other.toArray();
    const collectionLength = this.#_collection.length;

    for (let i = 0; i < collectionLength; i++) {
      const find = otherArray.find((el) => el === this.#_collection[i]);

      if (find !== undefined) {
        result.push(find);
      }
    }

    return Collection.create<T>(...result);
  }

  public static create<T>(...collection: T[]): ICollection<T> {
    return new Collection<T>(collection);
  }

  public clone(): ICollection<T> {
    return Collection.create<T>(...this.#_collection);
  }

  public toArray(): T[] {
    return this.#_collection;
  }

  public get length(): number {
    return this.#_collection.length;
  }
}
