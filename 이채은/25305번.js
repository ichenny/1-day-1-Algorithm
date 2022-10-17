const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cut = Number(input[0].split(" ")[1]);
let scores = input[1].split(" ").map(Number);
let sorted = scores.sort((a, b) => b - a);

console.log(sorted[cut - 1]);
