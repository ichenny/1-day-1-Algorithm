// 달팽이가 하루에 올라가는 높이
// (A-B)(x-1) + A >= C
// AX - BX + B >= C
// (A-B)X >= C - B
// X >= (C-B)/(A-B)

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let up = Number(input[0]);
let down = Number(input[1]);
let height = Number(input[2]);
let day = Math.ceil((height - down) / (up - down));

console.log(day);
