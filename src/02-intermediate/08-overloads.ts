function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

add(1, 2);
add("hello", "world");

type asyncCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;

function asyncSum(a: number, b: number, cb?: asyncCb): any {
  const result = a + b;
  if (cb) {
    return cb(a + b);
  }
  return Promise.resolve(result);
}

asyncSum(1, 2);
asyncSum(1, 2, (res) => res + 1);
