let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let count = 0;

for(let i = 1; i <= Number(input[0]); i++){
    let word = input[i];
    let arr = [];
    let isGroupWord = true;


    for(let j = 0; j < word.length; j++){
        if(arr.indexOf(word[j]) === -1){
            arr.push(word[j]);
        } else {
            if(arr.indexOf(word[j]) !== arr.length-1){
                isGroupWord = false;
                break;
            }
        }
    }
    if(isGroupWord){
        count++;
    }
}

console.log(count);



