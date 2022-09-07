let arr = [];

function d(n){

    if(n > 0 && n < 10){
        arr.push(2 * n);
    } else if(n >= 10 && n < 100){
        arr.push(n + Math.floor(n / 10) + (n % 10));
    } else if(n >= 100 && n < 1000){
        arr.push(n + Math.floor(n / 100) + Math.floor((n % 100) / 10) + ((n % 100) % 10));
    } else if(n >= 1000 && n < 10000){
        arr.push(n + Math.floor(n / 1000) + Math.floor((n % 1000) / 100)  + Math.floor(((n % 1000) % 100) / 10) + ((n % 1000) % 100) % 10);
    }

    return arr;
}

for(let i = 1; i < 10000; i++){

    if(!d(i).includes(i)){
        console.log(i);
    }
}
