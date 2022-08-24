const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);

const repeat = (input) => {
    let result = '';
    // 줄바꿈 기준으로 반복
    for (i = 1; i <= testCase; i++) {
        let num = Number(input[i].split(' ')[0]);
        let text = input[i].split(' ')[1];
        //한 문자씩 순서대로 반복
        for (n = 0; n < text.length; n++) {
            // 문자별 개수대로 쌓기
            for (l = 0; l < num; l++) {
                result += text[n];
            }
        }
        result += '\n';
    }
    console.log(result);
};

repeat(input);
