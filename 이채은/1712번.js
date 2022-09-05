const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);

let [a, b, c] = input;

let x = -a / (b - c);

console.log(x > 0 ? Math.floor(x) + 1 : -1);
