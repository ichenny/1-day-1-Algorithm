let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);

for(let i = 1; i <= num; i++){

    let count = 0;
    let result = 0;

    for(let j = 0; j < input[i].length; j++){

        if(input[i][j] === 'O'){

            count ++;
        
        } else {
        
            count = 0;
       
        }
        result = result + count;
    }
    console.log(result);

 }

