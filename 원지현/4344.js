let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let num = Number(input[0]);
let classscore;

for(let i = 1; i <= num; i++){
    
    let count = 0;
    let sum = 0;
    let average;
    
    classscore = input[i].split(' ')

    for(let j = 1; j <= Number(classscore[0]); j++){
        sum = sum + Number(classscore[j]);
    }

    average = sum / Number(classscore[0]);

    for(let k = 1; k <= Number(classscore[0]); k++){
        if(classscore[k] > average){
            count = count + 1;
        }
    }

    console.log(`${(count / classscore[0] * 100).toFixed(3)}%`);

}
