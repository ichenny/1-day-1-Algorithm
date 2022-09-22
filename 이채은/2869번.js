const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let [A, B, V] = input;

let up = A - B;

console.log(Math.ceil((V - B) / up));
