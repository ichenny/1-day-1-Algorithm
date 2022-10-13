const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
const binarySearch = (find, arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let temp = arr[mid];
    if (temp === find) {
      return result.push(1);
    } else if (temp > find) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result.push(0);
};

let cards = input[1]
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let nums = input[3].split(' ').map(Number);

for (let i = 0; i < nums.length; i++) {
  binarySearch(nums[i], cards);
}
console.log(result.join(' '));
