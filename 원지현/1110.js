let input = Number(require('fs').readFileSync('dev/stdin').toString());

let count = 0;
let sum;
let newNum = input;

while (true) {

    sum = Math.floor(newNum / 10) + (newNum % 10);
    newNum = (newNum % 10) * 10 + (sum % 10);

    count++;

    if (newNum == input) {
        console.log(count);
        break;
    }
}



