// 오답노트

// 1. ==, === 비교연산자 차이 : ===은 값과 타입이 모두 같은지 비교
// arr = ['1','2','3'] 과 같으므로 문자열을 비교하려면 ==을 사용해야 해당조건을 만족할 수 있다.

// 2. break, continue 차이
// break : 자신이 포함된 가장 가까운 반복문을 벗어남(특정 조건을 만족하면 반복문을 벗어날 때 사용)
// continue : 자신이 포함된 가장 가까운 반복문을 벗어나지 않고 반복문의 끝으로 이동(반복 중, 특정 조건을 만족하는 경우 제외할 때 사용)

let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let idx = Number(input[0]);
let arr = input[1].split(' ');
let count = 0;

for(let i = 0; i < idx; i++){

    let prime = 1;
    
    if(arr[i] == 1){
        continue;
      }
        
    for(let j = 2; j <= Math.floor(Math.sqrt(arr[i])); j++){
      
        if(arr[i] % j === 0){
            prime = 0;
          } 
    }     
        if(prime === 1){
            count++;
          }
}

console.log(count);

// 1차 답
// for(let i = 0; i < idx; i++){

//     for(let j = 2; j < arr[i]; j++){
      
//         if(arr[i] % j === 0){
//             break;
//         } else if(j === arr[i]-1){
//             count++;
//           }
//     }
// }

// console.log(count);

// 2차 답
// let idx = 4; 
// let arr = ['1', '3', '5', '7']; 
// let count = 0;

// for(let i = 0; i < idx; i++){

//     let prime = 1;
    
//     if(arr[i] === 1){
//         continue;
//       }
        
//     for(let j = 2; j <= Math.floor(Math.sqrt(arr[i])); j++){
      
//         if(arr[i] % j === 0){
//             prime = 0;
//         } 
        
//         if(prime === 1){
//             count++;
//           }
//     }
// }

// console.log(count);


