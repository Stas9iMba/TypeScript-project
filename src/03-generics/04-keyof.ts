type WindowProp = keyof Window;

const myValue: WindowProp = "onfocus";

interface PC {
  brand: string;
  year: number;
}

type Typ1 = keyof PC;

const val1: Typ1 = "brand";

type Tup1 = keyof [number, string];

const val2: Tup1 = "0";
