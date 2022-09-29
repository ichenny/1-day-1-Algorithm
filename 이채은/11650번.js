const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()
let arr = input.map((el) => el.split(" ").map(Number))

arr.sort((a,b) =>{
    if(a[0] === b[0]) return a[1] -b[1]
    else return a[0] - b[0]
})

console.log(...arr.join("\n").split(","))