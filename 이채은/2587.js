const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v)
  .sort();

const sum = input.reduce((a, b) => a + b);
const avg = sum / input.length;

const mid = Math.round(input.length / 2 - 1);

console.log(avg);
console.log(input[mid]);
