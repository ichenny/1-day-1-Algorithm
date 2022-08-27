const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum = sum + Math.pow(input[i], 2);
}

let result = sum % 10;

console.log(result);
