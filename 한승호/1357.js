const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const rev = (num) => {
  let temp = String(num);
  num = '';
  for (let i = 1; i <= temp.length; i++) {
    num = num + temp[temp.length - i];
  }
  return (num = Number(num));
};

let x = input[0];
let y = input[1];

console.log(rev(rev(x) + rev(y)));
