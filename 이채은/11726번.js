const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

let tiling = function (n) {
  let memo = [0, 1, 2];
  let aux = function (n) {
    if (memo[n] !== undefined) return memo[n];
    else {
      memo[n] = (aux(n - 1) + aux(n - 2)) % 10007;
      return memo[n];
    }
  };
  return aux(n);
};

let answer = tiling(input);

console.log(answer);
