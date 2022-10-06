const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input.shift());

let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

for (let tests of input) {
  let test = tests.split(" ").map(Number);
  let GCD = getGCD(test[0], test[1]);
  let LCM = (test[0] * test[1]) / GCD;
  console.log(LCM);
}

// 숏코딩

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// Number(input.shift())

// let getGCD = (n1, n2) => (n2 > 0 ? getGCD(n2, n1 % n2) : n1)

// for(let tests of input){
//     let [a,b] = tests.split(" ").map(Number)
//     let GCD = getGCD(a, b)
//     console.log(a*b/GCD)
// }
