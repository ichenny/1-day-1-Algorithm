const input = require('fs').readFileSync('./index.txt').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  console.log(
    input[i]
      .split(' ')
      .sort((a, b) => a - b)
      .at(-3)
  );
}
