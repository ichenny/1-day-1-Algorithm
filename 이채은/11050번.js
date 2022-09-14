const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let [N, K] = input;

let n = 1;
let k = 1;
let n_k = 1;

for (let i = 1; i <= N; i++) {
  n = n * i;
}

for (let j = 1; j <= K; j++) {
  k = k * j;
}

for (let m = 1; m <= N - K; m++) {
  n_k = n_k * m;
}

console.log(n / (k * n_k));
