let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
let num = Number(input[0]);

let cnt = 1, block = 1;

while (block < num) {    
  block += 6 * cnt;

  cnt++;
}

console.log(cnt);


