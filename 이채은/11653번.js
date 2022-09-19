const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString())

let num = input
let answer = []

while(num % 2 === 0){
    answer.push(2)
    num = num / 2
}

for(let i=3; i*i<= num; i+=2){
    while(num % i === 0){
        answer.push(i)
        num = num / i
    }
}

if(num > 2) answer.push(num)

console.log(answer.join("\n"))