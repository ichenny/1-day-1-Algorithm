const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const isPrime = (num) => {
    if(num === 1) return false
    
    for(let m=2; m <= Math.sqrt(num); m++){
        if(num % m === 0) return false
    }
    return true
}

for(let i=0; i<input.length-1; i++){
    let result = []
    for(let j=input[i]+1; j<=2*input[i]; j++){
        if(isPrime(j)) result.push(j)
    }
    console.log(result.length)
}
