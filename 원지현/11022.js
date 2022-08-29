let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let max = Number(input[0]);
let result;

for(let i = 1; i <= max; i++){

    let num = input[i].split(' ');

    result = Number(num[0]) + Number(num[1]);

    console.log(`Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${result}`);
}

