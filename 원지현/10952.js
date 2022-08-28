let input = require('fs').readFileSync('example.txt').toString().split('\n');

for(let i = 0; i < input.length; i++){
    
    let inputArray = input[i].split(' ');
    let result = Number(inputArray[0]) + Number(inputArray[1]);

    if(result !== 0){
        console.log(result);
    } else {
        break;
    }
}