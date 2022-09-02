let input = require('fs').readFileSync('example.txt').toString().split('\n');

let num = Number(input[0]);
let numsArray = input[1].split(' ');
let arr = [];

for(i = 0; i < num; i++){
    arr.push(Number(numsArray[i]));
}

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);