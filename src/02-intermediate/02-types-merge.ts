type Union1 = "a" | "b" | "c" | "d";
type Union2 = "a" | "f" | "c" | "h";
type Union3 = Union1 | Union2; // a | b | c | d | f | h
type Union4 = Union1 & Union2; // a | c

type Union5 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};

const example: Union5 = {
  a: "a",
  b: "b",
  c: 1,
  t: false,
  z: null,
};

interface User {
  isOnline?: boolean;
}

interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

type Employee = {
  contactStart: Date;
} & User &
  Person;

type Developer = {
  skills: string[];
  phone: string;
  level?: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
} & Employee;
