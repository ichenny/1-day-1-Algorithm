const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [a, b] = input.shift().split(" ").map(Number);

let nHear = new Set(input.slice(0, a));
let nSee = new Set(input.slice(a));
const common = [...nHear].filter((x) => nSee.has(x)).sort();

console.log(`${common.length}\n${common.join("\n")}`);
