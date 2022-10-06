const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let m = input[0];
let n = input[1];
let result = [];

function isPrimeNumber(n) {
  if (n == 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

for (let i = m; i <= n; i++) {
  if (isPrimeNumber(i)) {
    result.push(i);
  }
}

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.reduce((acc, cur) => acc + cur));
  console.log(result[0]);
}
