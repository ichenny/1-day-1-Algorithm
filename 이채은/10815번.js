const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, n, M, m] = input;

let arr_n = n.split(" ");
let arr_m = m.split(" ");
let set_n = new Set(arr_n);

let result = arr_m.map((el) => (set_n.has(el) ? 1 : 0));

console.log(result.join(" "));
