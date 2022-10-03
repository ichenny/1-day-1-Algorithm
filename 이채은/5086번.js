const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let tests = input.map((el) => el.split(" ").map(Number));

let answer = [];

for (let test of tests) {
  if (test[0] === 0 && test[1] === 0) break;
  if (test[1] % test[0] === 0) answer.push("factor");
  else if (test[0] % test[1] === 0) answer.push("multiple");
  else answer.push("neither");
}

console.log(answer.join("\n"));
