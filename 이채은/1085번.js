const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);

let [x, y, w, h] = input;

let left = x - 0;
let right = w - x;
let top = h - y;
let bottom = y - 0;

let result = Math.min(left, right, top, bottom);

console.log(result);
