const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let n = input[0];
let result = "";

for (let i = n; i >= 1; i--) {
  result = result + i + "\n";
}

console.log(result);
