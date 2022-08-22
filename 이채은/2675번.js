const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = parseInt(input[0]);
//새로운 문자열 변수
let result = "";

for (let i = 1; i <= num; i++) {
  let a = parseInt(input[i].split(" ")[0]);
  let str = input[i].split(" ")[1];

  for (let j = 0; j < str.length; j++) {
    result = result + str[j].repeat(a);
  }
  console.log(result);
  result = "";
}
