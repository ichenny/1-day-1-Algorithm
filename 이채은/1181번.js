const fs = require("fs");
const input = new Set(
  fs.readFileSync("/dev/stdin").toString().trim().split("\n").slice(1)
);

let words = [...input];

let sorted = words
  .sort((a, b) => {
    if (a.length < b.length) return 1;
    else if (a.length > b.length) return -1;
    else if (a < b) return 1;
    else if (a > b) return -1;
  })
  .reverse();

console.log(sorted.join("\n"));
