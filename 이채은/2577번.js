const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input 요소 모두 곱해주기
let num = input.reduce((a, b) => a * b);

// 확인하기 쉽게 string으로 변경
let str = String(num);

let numbers = "0123456789";

for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (numbers[i] === str[j]) {
      count++;
    }
  }
  console.log(count);
}
