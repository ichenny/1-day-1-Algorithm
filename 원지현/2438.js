let input = require('fs').readFileSync('example.txt').toString().split(' ');
let num = Number(input[0]);
let star = '';

for(let i = 1; i <= num; i++){
    star += '*';
    console.log(star);
}