let input = require('fs').readFileSync('dev/stdin').toString();
let N = input;
let count = 0;

if(Number(N) < 100){
    count = Number(N);
} else {
    count = 99;
    for(let i = 100; i <= Number(N); i++){
        if(String(i)[0] - String(i)[1] === String(i)[1] - String(i)[2]){
            count ++;
        }
    }
}

console.log(count);
