const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number))
  .flat();

const max = Math.max(...input);
const i = input.indexOf(max);

const row = Math.floor(i / 9) + 1;
const col = (i % 9) + 1;

console.log(max);
console.log(row, col);
