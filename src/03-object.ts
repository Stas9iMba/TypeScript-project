interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: "Ford",
  type: "sedan",
  isNew: false,
  name: "Mustang",
};

car.type = "hatchback";

const car2: Car = {
  wheels: 4,
  brand: "Ford",
  type: "",
  name: "Mustang",
};

car2["go"] = true;
