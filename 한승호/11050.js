const input = require('fs').readFileSync('./index.txt').toString().trim().split(' ');

const n = input[0];

const r = input[1];

const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(n) / (factorial(r) * factorial(n - r)));
