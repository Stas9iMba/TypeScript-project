function printPoint(point: { x: string; y: string }): void {
  console.log(`x: ${point.x}, y: ${point.y}`);
}

const obj1 = {
  x: "1",
  y: "2",
};

printPoint(obj1);

const obj2 = {
  x: "3",
  y: "4",
  z: "5",
};

printPoint(obj2);

function printName(name: { name: string; userId?: string }): void {
  console.log(`name: ${name.name.toLowerCase()}`);
  if (name.userId) {
    console.log("userId:", name.userId.toLowerCase());
  }
}

printName({ name: "john" });
printName({ name: "jane", userId: "123" });
