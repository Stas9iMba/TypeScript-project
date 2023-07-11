function sum(a: number, b: number): number {
  return a + b;
}
const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
  return a + b;
};

sum(1, 2);

function log(name: string, userId?: string): void {
  console.log("Hello", name, "with id", userId || "anonymous");
}

log("John");

// символом вопроса (?) после типа, это указывает на то, что userId является необязательным параметром, который может быть опущен при вызове функции. Возвращаемый тип: Тип возвращаемого значения функции указан как void. Это означает, что функция не возвращает никакого значения и не имеет оператора return.

function crash(): never {
  throw new Error("crash!");
}

function average(...nums: number[]): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}
