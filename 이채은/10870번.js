const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);

let n = input[0];

function fivo(n) {
  if (n <= 1) return n;

  return fivo(n - 2) + fivo(n - 1);
}

let result = fivo(n);

console.log(result);
