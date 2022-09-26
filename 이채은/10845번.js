const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let queue = [];
let answer = [];

let push = (num) => {
  queue.push(num);
};

let pop = () => {
  if (queue.length > 0) {
    let result = queue.shift();
    answer.push(result);
  } else answer.push(-1);
};

let size = () => {
  answer.push(queue.length);
};

let empty = () => {
  if (queue.length > 0) answer.push(0);
  else answer.push(1);
};

let front = () => {
  if (queue.length > 0) answer.push(queue[0]);
  else answer.push(-1);
};

let back = () => {
  if (queue.length > 0) answer.push(queue[queue.length - 1]);
  else answer.push(-1);
};

for (let i = 1; i <= input[0]; i++) {
  if (input[i] === "pop") pop();
  else if (input[i] === "size") size();
  else if (input[i] === "empty") empty();
  else if (input[i] === "front") front();
  else if (input[i] === "back") back();
  else {
    let X = Number(input[i].split(" ")[1]);
    push(X);
  }
}

console.log(answer.join("\n"));
