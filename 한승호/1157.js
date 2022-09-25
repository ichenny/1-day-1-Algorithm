const txt = require('fs').readFileSync('./index.txt').toString().trim().toUpperCase();

let obj = {};
let largest = 0;
let secondLargest = 0;
let idx;
let result = [];

for (let i = 0; i < txt.length; i++) {
  if (obj[txt[i]] === 1 || typeof obj[txt[i]] === 'number') {
    obj[txt[i]]++;
  } else {
    obj[txt[i]] = 1;
  }
}

const findLargest = (obj, largest) => {
  for (key in obj) {
    if (largest === 0) {
      largest = obj[key];
      idx = key;
    } else if (largest < obj[key]) {
      largest = obj[key];
      idx = key;
    }
  }
  result.push([idx, largest]);
  obj[idx] = 0;
};

findLargest(obj, largest);
findLargest(obj, secondLargest);

if (result[0][1] === result[1][1]) {
  console.log('?');
} else {
  console.log(result[0][0]);
}
