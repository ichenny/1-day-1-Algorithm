const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

let arr = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) arr.push(i);
}

console.log(arr[0]);
console.log(arr[1]);
