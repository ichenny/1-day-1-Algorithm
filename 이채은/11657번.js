const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.slice(1).map((el) => el.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log(...arr.join("\n").split(","));
