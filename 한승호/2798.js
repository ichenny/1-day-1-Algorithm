const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let allCards = Number(input[0].split(' ')[0]);
let score = Number(input[0].split(' ')[1]);

let cards = input[1].split(' ').map(Number);

let scores = [];
let result;

for (let i = 0; i < allCards - 2; i++) {
  for (let n = i + 1; n < allCards - 1; n++) {
    for (let l = n + 1; l < allCards; l++) {
      scores.push(cards[i] + cards[n] + cards[l]);
    }
  }
}

scores.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < scores.length; i++) {
  if (scores[i] <= score) {
    result = scores[i];
  } else if (scores[i] === score) {
    break;
  }
}
console.log(result);
