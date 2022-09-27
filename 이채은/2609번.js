const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let [a, b] = input;

const gcd = (num1, num2) => {
  let r = num1 % num2;
  return num2 === 0 ? num1 : gcd(num2, r);
};
let GCD = gcd(a, b);

let LCM = (a * b) / GCD;

console.log(GCD);
console.log(LCM);

// 두 수 a,b의 곱은 a,b의 최대공약수와 최소공배수의 곱과 같다.
