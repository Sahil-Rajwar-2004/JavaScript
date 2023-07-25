function add(array){    // use only if argument is an array
    let sum = 0;
    for(let i = 0;i < array.length;i++){
        sum += array[i];
    }return sum;
}

let product = (array) => {  // use only if argument is an array
    let product = 1;
    for(let i = 0;i < array.length;i++){
        product *= array[i];
    }return product;
}

let max = (...numbers) => {     // use when we have no idea about the number of arguments we need
    let maxValue = 0;
    for(let number of numbers){
        if(maxValue < number){
            maxValue = number;
        }
    }return maxValue;
}

array = [1,2,3,4,5,6,7,8,9,10]

console.log(add(array));
console.log(product(array));
console.log(max(1,2,3,4,5,6,7,8,10,9));
