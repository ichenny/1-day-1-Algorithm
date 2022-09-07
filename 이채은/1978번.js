const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numbers = input[1].split(" ").map((val) => +val);

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let count = numbers.filter((el) => isPrime(el));
console.log(count.length);
