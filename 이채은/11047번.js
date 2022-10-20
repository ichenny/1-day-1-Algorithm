const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let leng = Number(input[0].split(" ")[0]);
let num = Number(input[0].split(" ")[1]);
let coins = input.slice(1).map(Number).reverse();
let cnt = 0;

for (let i = 0; i < leng; i++) {
  cnt = cnt + parseInt(num / coins[i]);
  num = num % coins[i];
}
console.log(cnt);
