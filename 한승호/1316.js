const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = input[0];
let testWord = input.slice(1);
let result = 0;

const check = (word) => {
    let temp = [];
    for (let i = 0; i < word.length; i++) {
        if (!temp.includes(word[i])) {
            temp.push(word[i]);
        } else if (temp.includes(word[i]) && word[i] !== word[i - 1]) {
            return 0;
        }
    }
    return 1;
};

for (let i = 0; i < testCase; i++) {
    result += check(testWord[i]);
}

console.log(result);
