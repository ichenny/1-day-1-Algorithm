const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let [a, b] = input;

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let result = [];
for (let j = a; j <= b; j++) {
  if (isPrime(j)) result.push(j);
}
console.log(result.join("\n"));
