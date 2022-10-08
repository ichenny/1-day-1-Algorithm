const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let sorted = input.sort((a, b) => a - b);

console.log(sorted.join("\n"));
