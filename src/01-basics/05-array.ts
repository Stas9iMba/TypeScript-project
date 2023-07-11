const numbers = [1, 2, 3];

const strings: string[] = [];
const strings2: Array<string> = [];

strings.push("hello");

const cars: Car[] = [];
cars.push({ wheels: 4, brand: "BMW", type: "sedan", isNew: true });

[
  [1, 2, 3],
  [1, 2, 3],
];

const arrayOfArr: string[][] = [];
arrayOfArr.push(["a", "b"]);

function printArr(arr: unknown[]): void {
  arr.forEach((item, index) => {
    console.log(item, index);
  });
}
