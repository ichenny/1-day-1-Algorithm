const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let money = input[0].split(' ')[1];
let coins = [];
for (let i = input.length - 1; i > 0; i--) {
  coins.push(input[i].trim());
}

let count = 0;

for(let n=0; n<coins.length; n++){
  if(money===0){
    break;
  }

  count += Math.floor(Number(money/coins[n]));
  money %= coins[n];
}

console.log(count)