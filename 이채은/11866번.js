const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);

let [N, K] = input;

let circle = Array(N)
  .fill(0)
  .map((_, idx) => idx + 1);
let permutation = [];

while (circle.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    let num = circle.shift();
    circle.push(num);
  }
  let num = circle.shift();
  permutation.push(num);
}

console.log(`<${permutation.join(", ")}>`);
