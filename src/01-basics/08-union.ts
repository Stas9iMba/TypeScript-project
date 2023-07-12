type Status = "ok" | "loading" | "error";

const staticX: Status = "error";

function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log(`Welcome`, person.join(" "));
    return 1;
  } else {
    console.log(`Welcome ${person}`);
    return person;
  }
}
