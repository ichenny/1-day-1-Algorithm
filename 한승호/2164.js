const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let queue = [];

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

let front = 0;
let back = queue.length - 1;

const cardSort = (queue) => {
  if (front === back) {
    return console.log(queue[front]);
  }
  front++;
  back++;
  queue[back] = queue[front];
  front++;
  cardSort(queue);
};

cardSort(queue);
