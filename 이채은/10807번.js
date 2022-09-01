const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input[0]);
let numbers = input[1].split(" ").map((el) => Number(el));
// console.log(numbers.length)
let num = parseInt(input[2]);
// console.log(num)
let count = 0;

for (let i = 0; i < n; i++) {
  if (numbers[i] === num) count++;
}

console.log(count);
