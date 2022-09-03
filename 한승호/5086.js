const input = require('fs').readFileSync('./index.txt').toString().trim().split('\n');

let first;
let second;
let rest;

for (i = 0; i < input.length; i++) {
  first = Number(input[i].split(' ')[0]);
  second = Number(input[i].split(' ')[1]);
  if (first > second) {
    rest = first / second;
    if (rest === Math.floor(rest)) {
      console.log('multiple');
    } else {
      console.log('neither');
    }
  } else if (first < second) {
    rest = second / first;
    if (rest === Math.floor(rest)) {
      console.log('factor');
    } else {
      console.log('neither');
    }
  }
}
