let input = require('fs').readFileSync('example.txt').toString().split('\n');
let firstInput = input[0].split(' ');
let secondInput = input[1].split(' ');
let result = '';

for(i = 0; i < secondInput.length; i++){
    if(Number(secondInput[i]) < Number(firstInput[1])){
        result = result + Number(secondInput[i]) + ' ';
    }
}

console.log(result);