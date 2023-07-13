function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
  return value[0];
}

const head1 = <T>(value: T[]): T => value[0];

head(["1", "2", "3"]);

interface ModelDate<T> {
  title: string;
  value: T;
}

const obj4: ModelDate<number> = {
  title: "title",
  value: 1,
};

const obj5: ModelDate<string> = {
  title: "title",
  value: "1",
};
