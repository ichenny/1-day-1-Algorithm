const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num;
let reverse;

for (i = 0; i < input.length - 1; i++) {
  num = input[i].replace(/\n|\r|\s*/g, '');
  reverse = num.split('').reverse().join('');
  if (num === reverse) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
