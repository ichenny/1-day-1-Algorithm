const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let originalLength = input[0]
  .split(" ")
  .map(Number)
  .reduce((a, b) => a + b);

let arr_A = input[1].split(" ").map(Number);
let arr_B = input[2].split(" ").map(Number);

let arr_AB = new Set([...arr_A, ...arr_B]);
let reducedLength = arr_AB.size;

let answer = reducedLength - (originalLength - reducedLength);

console.log(answer);
