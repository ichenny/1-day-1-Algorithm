const input = Number(require('fs').readFileSync('./index.txt').toString().trim());

const findZero = (n) => {
  const factorial = (num) => {
    return BigInt(num) != 1 ? BigInt(num) * factorial(BigInt(num) - BigInt(1)) : BigInt(1);
  };

  let arr = String(factorial(n)).split('').reverse();

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') {
      return i;
    }
  }
};

if (input === 0) {
  console.log(0);
} else {
  console.log(findZero(input));
}
