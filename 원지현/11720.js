let input = require('fs').readFileSync('example.txt').toString().split('\n');
let num = Number(input[0]);
let nums = input[1].split('');
let sum = 0;

for(let i = 0; i < num; i++){
    sum = sum + Number(nums[i]);
}

console.log(sum);