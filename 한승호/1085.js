const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let x = input[0];
let y = input[1];
let w = input[2];
let h = input[3];

let xCal;
let yCal;

if (x <= w - x) {
  xCal = x;
} else {
  xCal = w - x;
}

if (y <= h - y) {
  yCal = y;
} else {
  yCal = h - y;
}

if (xCal >= yCal) {
  console.log(yCal);
} else {
  console.log(xCal);
}
