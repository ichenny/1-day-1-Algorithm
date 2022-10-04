let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const fixedcost = Number(input[0]);     
const variablecost = Number(input[1]);  
const salescost = Number(input[2]);     

let n = Math.floor(fixedcost/(salescost - variablecost)) + 1;

if(salescost - variablecost <= 0){
    console.log(-1);
} else {
    console.log(n);
}
