type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

nums.push(9);
nums.push([12, [9]]);

//JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON("hello");
isJSON(12);
isJSON(true);
isJSON({ a: [123], v: { x: 1 } });
isJSON([1, { x: "" }]);
