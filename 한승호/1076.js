const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let first = input[0].replace(/\r/g, '');
let second = input[1].replace(/\r/g, '');
let third = input[2];

let color = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

let result = (String(color.indexOf(first)) + String(color.indexOf(second))) * 10 ** color.indexOf(third);

console.log(Number(result));
