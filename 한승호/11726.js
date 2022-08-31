const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const tiling = (n) => {
    let temp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        temp[i] = (temp[i - 1] + temp[i - 2]) % 10007;
    }
    return temp[input];
};

console.log(tiling(input));
