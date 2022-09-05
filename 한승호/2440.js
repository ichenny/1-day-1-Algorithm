const input = require('fs').readFileSync('./index.txt').toString().trim();

let arr = [];
let star = '*';

for (i = 1; i <= input; i++) {
  arr.push(star);
  star += '*';
}

console.log(arr.reverse().join('\n'));
