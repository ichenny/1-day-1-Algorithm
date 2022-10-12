let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let sugar = Number(input);
let count = 0;

while(true){

    if(sugar%5 === 0){
        console.log(sugar/5 + count);
        break;
    }

    if(sugar < 0){
        console.log(-1);
        break;
    }

    sugar -= 3;
    count++;
}
