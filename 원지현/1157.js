let input = require('fs').readFileSync('dev/stdin').toString().trim().toUpperCase();

const array = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    array[input.charCodeAt(i) - 65]++;
}

const max = Math.max(...array);
const index = array.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (array[j] === max && index != j) {
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));

// (시간초과 코드)

// let obj = {};

// for(let i = 0; i < input.length; i++){

//     let count = 0;

//     for(let j = 0; j < input.length; j++){

//         if(input[i] === input[j]){
//             count = count + 1;
//         }
//     }
//     obj[input[i]] = count;
// }

// let arr = Object.values(obj);

// let maxString = [];

// for(let key in obj){

//   if(obj[key] === Math.max(...arr)){
//         maxString.push(key);
//     }
// }

// if(maxString.length > 1) {
//     console.log('?');
// } else {
//     console.log(...maxString);
// }