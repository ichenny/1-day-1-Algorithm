const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let room = 1;

const hive = (input) => {
    for (i = 1; room < input; i++) {
        room = room + 6 * i;
    }
    return i;
};

console.log(hive(input));
