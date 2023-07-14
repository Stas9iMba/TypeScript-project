import { average } from "../01-basics/02-function";

let str1 = "hello";
type xx = typeof str1;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);
max(1, 2, 3);

type returnFn = ReturnType<typeof average>;
