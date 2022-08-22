const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0].split(" ")[0];
let b = input[0].split(" ")[1];

// 첫번째 숫자 바꿔주기
let before = "";
for (let i = 2; i >= 0; i--) {
  before = before + a[i];
}
before = Number(before);

// 두번째 숫자 바꿔주기
let after = "";
for (let i = 2; i >= 0; i--) {
  after = after + b[i];
}
after = Number(after);

// 두 수 중 더 큰 값
let max = Math.max(before, after);
console.log(max);
