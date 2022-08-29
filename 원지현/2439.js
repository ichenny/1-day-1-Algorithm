let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let num = Number(input[0]);
let star = '';
let blank = '';

for(let i = 1; i <= num; i++){
    star += '*';
    for(let j = 0; j < num - i; j++){
        blank += ' ';
    }
    console.log(blank + star);
    blank = '';
}


