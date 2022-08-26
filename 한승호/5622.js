const dial = require('fs').readFileSync('./index.txt').toString().trim();

let result = 0;

const dialNum = {
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ',
};

const time = (dial) => {
    for (let i = 0; i < dial.length; i++) {
        for (n = 2; n <= 9; n++) {
            if (dialNum[n].includes(dial[i])) {
                result += n + 1;
            }
        }
    }
    console.log(result);
};

time(dial);
