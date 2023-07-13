// Array<string>
// string[]
// Promise<string>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type YType = TypeFactory<number>;
type ZType = TypeFactory<boolean>;

function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray<number>(1, 2, 3);
toArray("a", "b", "c");
