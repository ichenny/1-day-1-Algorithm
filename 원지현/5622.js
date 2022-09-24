let input = require('fs').readFileSync('dev/stdin').toString().trim();
let seconds = 0;

let nums = {
    2 : ['A', 'B', 'C'],
    3 : ['D', 'E', 'F'],
    4 : ['G', 'H', 'I'],
    5 : ['J', 'K', 'L'],
    6 : ['M', 'N', 'O'],
    7 : ['P', 'Q', 'R', 'S'],
    8 : ['T', 'U', 'V'],
    9 : ['W', 'X', 'Y', 'Z']
};

  for(let i = 0; i < input.length; i++){
    for(let j = 2; j <= 9; j++){
        if(nums[j].includes(input[i])){
            seconds += j + 1;
        }
    }    
}

console.log(seconds);