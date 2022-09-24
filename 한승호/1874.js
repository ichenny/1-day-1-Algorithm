const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = [];
let stack = [];
let result = '';

for (let i = input[0]; i >= 1; i--) {
  arr.push(i);
}

for (let i = 1; i <= input[0]; i++) {
  let limit = 1;
  while (limit <= input[0] && stack[stack.length - 1] !== input[i]) {
    stack.push(arr.pop());
    result += '+\n';
    limit++;
  }
  if (stack[stack.length - 1] === input[i]) {
    stack.pop();
    result += '-\n';
  } else {
    result = 'NO';
    break;
  }
}

console.log(result);
