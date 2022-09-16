let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {

    let result = '';

    for (let j = 0; j < input[i].split(' ')[1].length; j++) {

        for (let k = 0; k < Number(input[i].split(' ')[0]); k++) {

            result += input[i].split(' ')[1][j];
        
        }
    }
    console.log(result);
}


