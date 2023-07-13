function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

interface Laptop {
  brand: string;
  model: string;
}

type F = Laptop["brand"];

const obj7 = { a: 1, b: 2, c: 3 };
prop("a", obj7);
// prop("d", obj7);
