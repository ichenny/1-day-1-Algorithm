const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);

let N = input[0];

let num;
let count = 0;

if (N < 100) num = N;
else if (100 <= N && N < 1000) {
  for (let i = 100; i <= N; i++) {
    let str = String(i);
    let first = str[0];
    let second = str[1];
    let third = str[2];
    if (Number(first) - Number(second) === Number(second) - Number(third))
      count++;
  }
  num = 99 + count;
} else if (N === 1000) num = 144;

console.log(num);
