const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString())

let block = 1
let range = 1

while(block < input){
    block = block + range + 1
    range ++
}

//range가 짝수인 경우

if(range % 2 === 0){
    let dif = block - input
    let child =  range - dif
    let mom = 1 + dif
    console.log(`${child}/${mom}`)
}

//range가 홀수인 경우 

if(range % 2 !== 0){
    let dif = block - input
    let child =  1 + dif
    let mom = range -dif
    console.log(`${child}/${mom}`)
}