let input = require('fs').readFileSync('example.txt').toString().split('\n');

let num = Number(input[0]);
let arr = input[1].split(' ');
let scores = [];
let result = [];

for(let i = 0; i < num; i++){
    scores.push(Number(arr[i]));
}

let sum = 0;

for(let j = 0; j < num; j++){
    result.push(scores[j] / Math.max(...scores) * 100);

    sum = sum + result[j];
}

console.log(sum / num);
