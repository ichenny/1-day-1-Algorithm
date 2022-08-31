const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = input;

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
