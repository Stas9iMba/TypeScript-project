// numbers
let x = 10;
let y = 1234n;
let z = NaN;

// string
let str: string;
str = "hello";
let symb = Symbol("symbol");

// boolean
let boolean = true;
boolean = false;

// nothing
let h: undefined = undefined;
let g: null = null;

// literal
const num = 123;
const str2 = "hello";

// universal
let mm: any = 123;
mm = "hello";
mm = [1, 2, 3];
mm.toString();

let xx: unknown = 2;
// xx.toString();
if (typeof xx === "string") xx.toString();
