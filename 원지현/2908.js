let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let num1 = '';
let num2 = '';

let arr = [];

for(let i = 0; i < 3; i++){

    num1 += input[0][2-i];
    num2 += input[1][2-i];

}

arr.push(num1);
arr.push(num2);

console.log(Math.max(...arr));