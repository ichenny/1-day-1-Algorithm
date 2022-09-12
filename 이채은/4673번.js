let arr = [];
let answer = [];

for (let i = 0; i <= 10000; i++) {
  let N = 0;
  let stringNumber = String(i);
  for (let j = 0; j < stringNumber.length; j++) {
    N += Number(stringNumber[j]);
  }
  arr.push(i + N);
}

for (let i = 0; i <= 10000; i++) {
  if (arr.indexOf(i) === -1) answer.push(i);
}
console.log(answer.join("\n"));
