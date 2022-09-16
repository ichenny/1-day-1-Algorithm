const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let reversed = input[i].split("").reverse().join("");
  console.log(reversed === input[i] ? "yes" : "no");
}
