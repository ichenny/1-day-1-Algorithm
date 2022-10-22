const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let arr = input.map((el) => el.split(" "));
let sorted = arr.sort((a, b) => a[0] - b[0]);
console.log(sorted.join("\n").replace(/,/g, " "));
