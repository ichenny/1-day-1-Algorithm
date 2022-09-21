const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let order = parseInt(input[0]);
let stack = [];
let result;
let answer = [];

for (let i = 1; i <= order; i++) {
  // push인 경우
  if (input[i].includes("push")) {
    let push = input[i].split(" ");
    stack.push(Number(push[1]));
  }

  // pop인 경우
  if (input[i] === "pop" && stack.length > 0) {
    result = stack.pop();
    answer.push(result);
  } else if (input[i] === "pop" && stack.length === 0) {
    result = -1;
    answer.push(result);
  }

  // top인 경우
  if (input[i] === "top" && stack.length > 0) {
    result = stack[stack.length - 1];
    answer.push(result);
  } else if (input[i] === "top" && stack.length === 0) {
    result = -1;
    answer.push(result);
  }

  // size인 경우
  if (input[i] === "size") {
    result = stack.length;
    answer.push(result);
  }

  // empty인 경우
  if (input[i] === "empty" && stack.length > 0) {
    result = 0;
    answer.push(result);
  } else if (input[i] === "empty" && stack.length === 0) {
    result = 1;
    answer.push(result);
  }
}

console.log(answer.join("\n"));
