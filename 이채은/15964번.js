const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let [a, b] = input;

let result = (a + b) * (a - b);

console.log(result);
