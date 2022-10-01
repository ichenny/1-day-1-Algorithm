const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let txt;

const check = (bracket) => {
  let stack = [];
  txt = bracket.trim();
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === '(') {
      stack.push('(');
    } else if (txt[i] === '[') {
      stack.push('[');
    } else if (txt[i] === '{') {
      stack.push('{');
    } else if (txt[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return console.log('no');
      }
    } else if (txt[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        return console.log('no');
      }
    } else if (txt[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return console.log('no');
      }
    }
  }

  if (stack.length === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

for (let n = 0; n < input.length - 1; n++) {
  check(input[n]);
}
