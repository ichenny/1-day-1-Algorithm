let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

for(let i = 0; i < input.length; i++){
    
    let sumcase = input[i].split(' ');

    result = Number(sumcase[0]) + Number(sumcase[1]);

    if(!result){
        break;
    }

    console.log(result);
}
