const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;

while (input > 9) {
  count++;
  input = String(input)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
}

let three = [3, 6, 9];
let result = three.includes(Number(input)) ? "YES" : "NO";

console.log(count);
console.log(result);

//숏코딩 2위
// let n = require('fs').readFileSync('/dev/stdin').toString()
// let cnt = 0

// while(n > 9){
//     cnt++
//     n = String(n).split('').map(Number).reduce((a,b) => a+b)
// }

// let thr = [3,6,9]
// let result = thr.includes(Number(n)) ? "YES" : "NO"

// console.log(cnt+"\n"+result)
