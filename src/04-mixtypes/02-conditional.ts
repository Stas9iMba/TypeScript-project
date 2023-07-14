const xxx = 16;
const isXNegative = x >= 0 ? "no" : "yes";

interface StringRecord {
  [key: string]: string;
}

interface DateRecord {
  [key: string]: Date;
}

type MeRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MeRecord<string>;
const o1: Obj1 = {
  name: "John",
  age: "30",
};

export {};
