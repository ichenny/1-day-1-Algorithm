let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cards = input[1].split(" ").map(Number);
let [N, M] = input[0].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const gap = M - sum;
      if (gap >= 0 && answer <= sum) {
        answer = sum;
      }
    }
  }
}
console.log(answer);
