const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

let arr = input.sort((a, b) => a - b);
let average = arr.reduce((acc, cur) => acc + cur) / arr.length;
let mid = arr[Math.floor((arr.length - 1) / 2)];

console.log(average);
console.log(mid);
