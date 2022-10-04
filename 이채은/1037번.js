const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input[0];
let factor = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = factor[0] * factor[factor.length - 1];

console.log(answer);
