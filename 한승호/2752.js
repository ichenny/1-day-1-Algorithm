const input = require('fs').readFileSync('./index.txt').toString().trim().split(' ');

console.log(input.sort((a, b) => a - b).join(' '));
