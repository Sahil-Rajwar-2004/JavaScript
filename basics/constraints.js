let number = 39;

let isEven = (number) => {
    if(number%2 == 0){
        return true;
    }return false;
}

let isPrime = (number) => {
    for(let i = 2;i <= Math.sqrt(number);i++){
        if(number%i == 0){
            return false;
        }
    }return true;
}

console.log(isEven(number));
console.log(isPrime(number));