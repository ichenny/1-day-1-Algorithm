const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = +input[0];
let rings = input[1].split(" ").map(Number);

let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

for (let i = 1; i < num; i++) {
  let GCD = getGCD(rings[0], rings[i]);
  console.log(`${rings[0] / GCD}/${rings[i] / GCD}`);
}

// 숏코딩 2위

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// let num = +input[0];
// let rings = input[1].split(" ").map(Number);
// let getGCD = (n1, n2) => (n2 > 0 ? getGCD(n2, n1 % n2) : n1);

// for (let i = 1; i < num; i++) {
//   let GCD = getGCD(rings[0], rings[i]);
//   console.log(`${rings[0] / GCD}/${rings[i] / GCD}`);
// }
