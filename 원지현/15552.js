let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let max = Number(input[0]);
let result = '';

for(i = 1; i <= max; i++){
    let num = input[i].split(' ');
    result += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(result);