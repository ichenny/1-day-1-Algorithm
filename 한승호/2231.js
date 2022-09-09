const input = Number(require('fs').readFileSync('./index.txt').toString().trim());

let temp = 0;
let result;

const sum = (num) => {
    temp = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        temp += Number(str[i]);
    }
    return temp;
};

for (let n = 0; n < input; n++) {
    if (n + sum(n) === input) {
        return console.log(n);
    }
}
console.log(0);
