const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let resultArr = [];
class Deque {
  constructor() {
    this.arr = [];
    this.first = 0;
    this.last = 0;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.first] = item;
    this.last++;
  }
  push_back(item) {
    this.arr[this.last++] = item;
  }
  pop_front() {
    if (this.first >= this.last) {
      return resultArr.push(-1);
    } else {
      const result = this.arr[this.first++];
      return resultArr.push(result);
    }
  }
  pop_back() {
    if (this.first >= this.last) {
      return resultArr.push(-1);
    } else {
      const result = this.arr[--this.last];
      return resultArr.push(result);
    }
  }
  size() {
    return resultArr.push(this.last - this.first);
  }
  empty() {
    if (this.last - this.first === 0) {
      return resultArr.push(1);
    } else {
      return resultArr.push(0);
    }
  }
  front() {
    if (this.last - this.first === 0) {
      return resultArr.push(-1);
    } else {
      return resultArr.push(this.arr[this.first]);
    }
  }
  back() {
    if (this.last - this.first === 0) {
      return resultArr.push(-1);
    } else {
      return resultArr.push(this.arr[this.last - 1]);
    }
  }
}

let deque = new Deque();

for (let i = 1; i < input.length; i++) {
  let temp = input[i].trim().split(' ');
  if (temp[0] === 'push_front') {
    deque.push_front(temp[1]);
  } else if (temp[0] === 'push_back') {
    deque.push_back(temp[1]);
  } else if (temp[0] === 'pop_front') {
    deque.pop_front();
  } else if (temp[0] === 'pop_back') {
    deque.pop_back();
  } else if (temp[0] === 'size') {
    deque.size();
  } else if (temp[0] === 'empty') {
    deque.empty();
  } else if (temp[0] === 'front') {
    deque.front();
  } else if (temp[0] === 'back') {
    deque.back();
  }
}

console.log(resultArr.join('\n'));
