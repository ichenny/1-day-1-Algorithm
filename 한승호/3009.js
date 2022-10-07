const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let xObj = {};
let yObj = {};
let result = [];

for (let i = 0; i < input.length; i++) {
  let idx = input[i].trim().split(' ');
  if (typeof xObj[idx[0]] === 'undefined') {
    xObj[idx[0]] = 1;
  } else {
    xObj[idx[0]]++;
  }

  if (typeof yObj[idx[1]] === 'undefined') {
    yObj[idx[1]] = 1;
  } else {
    yObj[idx[1]]++;
  }
}

for (let key in xObj) {
  if (xObj[key] === 1) {
    result.push(key);
  }
}
for (let key in yObj) {
  if (yObj[key] === 1) {
    result.push(key);
  }
}

console.log(result.join(' '));
