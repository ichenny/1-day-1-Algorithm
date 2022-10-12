const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const divide = (num) => {
  for (let i = 2; i <= num; i++) {
    if (num / i === Math.floor(num / i)) {
      let num2 = num / i;
      console.log(i);
      return divide(num2);
    }
  }
};

divide(input);
