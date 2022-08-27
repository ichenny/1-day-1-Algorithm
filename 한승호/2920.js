const input = require('fs').readFileSync('./index.txt').toString().trim().split(' ').map(Number);

if (input[0] === 1) {
    for (i = 1; i < input.length; i++) {
        if (input[i] !== input[i - 1] + 1) {
            return console.log('mixed');
        }
    }
    console.log('ascending');
} else if (input[0] === 8) {
    for (i = 1; i < input.length; i++) {
        if (input[i] !== input[i - 1] - 1) {
            return console.log('mixed');
        }
    }
    console.log('descending');
} else {
    console.log('mixed');
}
