const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

let [n, m] = input;

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let arr = [];

for (let j = n; j <= m; j++) {
  if (isPrime(j)) arr.push(j);
}

if (arr.length === 0) console.log(-1);
else {
  let sum = arr.reduce((a, b) => a + b);
  let min = Math.min(...arr);

  console.log(sum);
  console.log(min);
}
