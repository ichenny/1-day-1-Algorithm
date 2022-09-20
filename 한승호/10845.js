const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = input[0];
const queueTable = [];
let result = [];

const push = (num) => {
  queueTable.push(num);
};

const pop = () => {
  if (queueTable.length === 0) {
    result.push(-1);
  } else {
    result.push(queueTable.shift());
  }
};

const size = () => {
  result.push(queueTable.length);
};

const empty = () => {
  if (queueTable.length === 0) {
    result.push(1);
  } else {
    result.push(0);
  }
};

const front = () => {
  if (queueTable.length === 0) {
    result.push(-1);
  } else {
    result.push(queueTable[0]);
  }
};

const back = () => {
  if (queueTable.length === 0) {
    result.push(-1);
  } else {
    result.push(queueTable[queueTable.length - 1]);
  }
};

for (let i = 1; i <= testCase; i++) {
  if (input[i] === 'pop') {
    pop();
  } else if (input[i] === 'size') {
    size();
  } else if (input[i] === 'empty') {
    empty();
  } else if (input[i] === 'front') {
    front();
  } else if (input[i] === 'back') {
    back();
  } else {
    let temp = input[i].split(' ');
    push(temp[1]);
  }
}

console.log(result.map(String).join('\n'));
