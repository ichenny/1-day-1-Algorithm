let input = require('fs').readFileSync('example.txt').toString().split('\n');

let arr = [];
let idx = 0;

for(i = 0; i < 9; i++){
    arr.push(Number(input[i]));

    if(arr[i] === Math.max(...arr)){
        idx = i;
    }
}

console.log(Math.max(...arr));
console.log(idx+1);
