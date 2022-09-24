const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N,M] = input[0].split(" ").map(v=>+v)

let S = new Set(input.slice(1, N+1))
let test = input.slice(N+1, N+1+M)

let result = test.filter((el) => S.has(el))

console.log(result.length)