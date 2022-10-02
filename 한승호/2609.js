const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let result;

const gcd = (num1, num2) => {
  const remainder = num1 % num2;
  if (remainder === 0) {
    result = num2;
    return num2;
  }
  return gcd(num2, remainder);
};

const lcm = (num1, num2, gcd) => {
  return (num1 * num2) / gcd;
};

console.log(gcd(input[0], input[1]));
console.log(lcm(input[0], input[1], result));
