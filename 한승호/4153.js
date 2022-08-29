const input = require('fs').readFileSync('./index.txt').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let nums = input[i].split(' ').sort((a, b) => a - b);
    let num1 = nums.shift();
    let num2 = nums.shift();
    let num3 = nums.shift();

    if (num3 ** 2 === num1 ** 2 + num2 ** 2) {
        console.log('right');
    } else {
        console.log('wrong');
    }
}
