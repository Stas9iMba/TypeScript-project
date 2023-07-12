interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

export interface Window {
  isAuth?: boolean;
}

//  window.isAuth = true;

export const user1: User = {
  email: "email",
  login: "login",
  password: "password",
  isOnline: true,
};

interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

export interface Employee extends Person, User {
  contactStart: string;
}

export interface Developer extends Employee {
  skills: string[];
  phone: string;
  level?: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
}

// class myDeveloper implements Developer {}

export const user2: Employee = {
  firstName: "firstName",
  lastName: "lastName",
  phone: "phone",
  yearOfBirth: 2000,
  isOnline: true,
  login: "login",
  password: "password",
  email: "email",
  contactStart: "contactStart",
};
