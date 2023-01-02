const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
const [n, ...nums] = input;
const numbers = nums.sort((a, b) => a - b);

const avg = Math.round(numbers.reduce((a, b) => a + b) / n);
const mid = numbers[parseInt(n / 2)];
const rag = numbers[n - 1] - numbers[0];

const getmode = (array) => {
  if (numbers.length === 1) return numbers[0];

  const obj = {};
  const answer = [];

  numbers.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  for (let key in obj) {
    answer.push([Number(key), obj[key]]);
  }

  answer.sort((a, b) => b[1] - a[1]);

  if (answer[0][1] === answer[1][1]) {
    let max = answer[0][1];
    let filtered = answer.filter((el) => el[1] === max);
    filtered.sort((a, b) => a[0] - b[0]);
    let mode = filtered[1][0];
    return mode;
  } else {
    let mode = answer[0][0];
    return mode;
  }
};
const mode = getmode(numbers);

console.log(avg + "\n" + mid + "\n" + mode + "\n" + rag);
