const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let str = input[0];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (let i = 0; i < alphabet.length; i++) {
  if (str.includes(alphabet[i]))
    result = result + str.indexOf(alphabet[i]) + " ";
  else result = result + "-1" + " ";
}
console.log(result.slice(0, -1));
