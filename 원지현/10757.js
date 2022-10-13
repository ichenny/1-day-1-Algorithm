let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let num1 = BigInt(input[0]);
let num2 = BigInt(input[1]);
let answer = num1 + num2;

console.log(answer.toString());