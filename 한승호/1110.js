let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let temp = input;
let temp2;
let result;
if (Number(temp) < 10) {
  temp = '0' + temp;
  input = temp;
}

for (i = 0; result !== input; i++) {
  temp2 = String(Number(temp[0]) + Number(temp[1]));
  result = temp[1] + temp2[temp2.length - 1];
  temp = result;
}
console.log(i);
