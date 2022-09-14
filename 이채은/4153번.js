const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let test = input[i].split(" ").map((v) => +v);
  let max = Math.max(...test);
  let min = Math.min(...test);
  let middle;
  for (let j = 0; j < test.length; j++) {
    if (test[j] !== max && test[j] !== min) middle = test[j];
  }

  let max_2 = Math.pow(max, 2);
  let min_2 = Math.pow(min, 2);
  let middle_2 = Math.pow(middle, 2);

  max_2 === min_2 + middle_2 ? console.log("right") : console.log("wrong");
}
