const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = input.split("").map(Number);
let sorted = num.sort((a, b) => b - a);

console.log(sorted.join(""));
