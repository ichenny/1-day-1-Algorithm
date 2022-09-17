const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let block = 1;
let range = 1;

while (block < input) {
  block = block + 6 * range;
  range++;
}

console.log(range);
