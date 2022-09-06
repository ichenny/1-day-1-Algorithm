const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  let test = input[i].split(" ").map((val) => +val);
  let num = test.splice(0, 1)[0];
  let sum = test.reduce((a, b) => a + b);
  let avg = sum / num;
  let count = 0;
  for (let j = 0; j < test.length; j++) {
    if (test[j] > avg) count++;
  }
  let result = ((count / num) * 100).toFixed(3);
  console.log(`${result}%`);
}
