const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();
let nums = input[0]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
let arr = [];

for (let i = 1; i <= n; i++) {
  let sliced = nums.slice(0, i);
  arr.push(sliced.reduce((a, b) => a + b));
}

console.log(arr.reduce((a, b) => a + b));
