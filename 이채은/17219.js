const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let data = new Map(input.slice(0, n).map((el) => el.split(" ")));
let sites = input.slice(n, n + m);
let passwords = sites.map((el) => data.get(el));

console.log(passwords.join("\n"));
