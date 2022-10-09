const fs = require("fs");
let [input] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let el of croatian) {
  input = input.split(el).join("!");
}

console.log(input.length);
