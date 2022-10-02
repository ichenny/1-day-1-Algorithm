const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

let x = [];
let y = [];
let answer = [];

for (let vertex of input) {
  x.push(vertex[0]);
}

const X = x.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

for (let vertex of input) {
  y.push(vertex[1]);
}

const Y = y.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

for (let key in X) {
  if (X[key] === 1) answer.push(key);
}

for (let key in Y) {
  if (Y[key] === 1) answer.push(key);
}

console.log(answer.join(" "));

// 다른풀이
// arr.sort 이용하기
