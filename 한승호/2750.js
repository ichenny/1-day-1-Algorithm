const input = require('fs').readFileSync('./index.txt').toString().trim().split('\n').map(Number);

let el = input.slice(1);

const quickSort = function (arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return [...lSorted, pivot, ...rSorted];
};

let result = quickSort(el);

console.log(result.join('\n'));
