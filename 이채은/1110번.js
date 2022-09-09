const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString())

let num = input;
let sum;

let i=0;
while(true){
    i++
    sum = parseInt(num/10) + num % 10
    num = (num % 10) * 10 + (sum % 10)
    
    if(num === input) break
}

console.log(i)