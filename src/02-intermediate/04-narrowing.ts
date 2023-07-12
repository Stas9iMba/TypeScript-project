function example1(x?: number | string) {
  if (typeof x === "number") {
    return x + 1;
  } else if (typeof x === "string") {
    return x.toUpperCase();
  } else if (x === undefined) {
    console.log("no value");
  } else {
    x;
  }
}

function exapmle2(strs: string | string[] | null) {
  if (Array.isArray(strs)) {
    //либо такой вариант
    // if (strs && typeof strs === "object") {
    strs.concat([]);
  } else if (typeof strs === "string") {
    strs.toUpperCase();
  } else {
    strs;
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getFullYear();
  } else {
    x.concat([]);
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move1(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
