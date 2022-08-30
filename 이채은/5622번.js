const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let str = input[0];

let result = 0;

let time;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "A" || str[i] === "B" || str[i] === "C") time = 3;
  else if (str[i] === "D" || str[i] === "E" || str[i] === "F") time = 4;
  else if (str[i] === "G" || str[i] === "H" || str[i] === "I") time = 5;
  else if (str[i] === "J" || str[i] === "K" || str[i] === "L") time = 6;
  else if (str[i] === "M" || str[i] === "N" || str[i] === "O") time = 7;
  else if (str[i] === "P" || str[i] === "Q" || str[i] === "R" || str[i] === "S")
    time = 8;
  else if (str[i] === "T" || str[i] === "U" || str[i] === "V") time = 9;
  else time = 10;

  result = result + time;
}
console.log(result);
