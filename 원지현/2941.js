let input = require('fs').readFileSync('dev/stdin').toString().trim();
let cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let cnt = 0;
let result = 0;

for(let i = 0; i < cro.length; i++){
    while(input.includes(cro[i])){
            cnt++;
            input = input.replace(cro[i],' ');   
    }
    result = cnt + input.split(' ').join('').length;
}

console.log(result);
