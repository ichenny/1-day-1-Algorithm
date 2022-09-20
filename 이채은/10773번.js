const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>+v);

let line = parseInt(input[0])
let num = []

for(let i=1; i<=line; i++){
    if(input[i] > 0) num.push(input[i])
    else num.pop()
}

let sum;

if(num.length > 0){
sum = num.reduce((a,b) => a+b)
}
else sum = 0

console.log(sum)
