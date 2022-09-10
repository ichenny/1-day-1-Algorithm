const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, A, M, B] = input.map((el) => el.split(" "));

let arr = new Set(A);

let result = B.map((el) => (arr.has(el) ? 1 : 0));

console.log(result.join("\n"));
