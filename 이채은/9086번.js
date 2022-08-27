const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

let result = "";

for (let i = 1; i <= num; i++) {
  let test = input[i];

  let result = test[0] + test[test.length - 1];

  console.log(result);
}
