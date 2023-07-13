function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len("aaaa");
len(["aaaa"]);
// len(12)

// object

