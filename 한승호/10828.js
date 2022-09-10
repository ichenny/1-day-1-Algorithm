const input = require('fs').readFileSync('./index.txt').toString().trim().split('\n');

const testCase = input[0].replace(/\n|\r*/g, '');

let arr = [];
let result = [];

let push = (arr, num) => {
  arr.push(num);
};

let pop = (arr) => {
  if (arr.length === 0) {
    result.push(-1);
  } else {
    result.push(arr.pop());
  }
};

let size = (arr) => {
  result.push(arr.length);
};

let empty = (arr) => {
  if (arr.length === 0) {
    result.push(1);
  } else {
    result.push(0);
  }
};

let top = (arr) => {
  if (arr.length === 0) {
    result.push(-1);
  } else {
    result.push(arr[arr.length - 1]);
  }
};

for (let i = 1; i <= testCase; i++) {
  let temp = input[i].replace(/\n|\r*/g, '');
  if (temp === 'pop') {
    pop(arr);
  } else if (temp === 'size') {
    size(arr);
  } else if (temp === 'empty') {
    empty(arr);
  } else if (temp === 'top') {
    top(arr);
  } else {
    let temp2 = temp.split(' ');
    push(arr, temp2[1]);
  }
}

console.log(result.join('\n'));
