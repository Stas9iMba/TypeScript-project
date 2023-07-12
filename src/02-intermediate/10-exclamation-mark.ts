let word: string | null = null;
const number = 10;

if (number > 5) {
  word = "abc";
}

console.log(word!.toLowerCase());

function printName1(name?: string) {
  const fullName: string = name!;
}

interface Person1 {
  name: string;
  age: number;
  sex: "male" | "female";
}

function printName2(person?: Person1) {
  console.log(person!.name);
}

const people: Person1[] = [
  {
    name: "john",
    age: 20,
    sex: "male",
  },
  {
    name: "jane",
    age: 30,
    sex: "female",
  },
  {
    name: "tom",
    age: 40,
    sex: "male",
  },
];

const femalePeople = people.find((person) => person.sex === "female")!;
