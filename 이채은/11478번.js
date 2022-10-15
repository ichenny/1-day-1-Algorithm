const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let words = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j <= input.length; j++) {
    let word = input.slice(i, j);
    words.push(word);
  }
}

console.log(new Set(words).size - 1);
