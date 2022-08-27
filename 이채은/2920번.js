const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let scale = input[0];
let result = "";

if (scale === "1 2 3 4 5 6 7 8") result = "ascending";
else if (scale === "8 7 6 5 4 3 2 1") result = "descending";
else result = "mixed";

console.log(result);
