const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .toUpperCase()
  .trim()
  .split(" ");

let str = input[0];
let arr = new Array(26).fill(0);

for (let i = 0; i < str.length; i++) {
  arr[str.charCodeAt(i) - 65]++;
}

let max = Math.max(...arr);
let index = arr.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (arr[j] === max && index !== j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
