let array = [3.14,"Hello",true,false,null,NaN,undefined];

let obj = {
    name: "John Wick",
    age: 30,
    occupation: "Boogeyman"
}

let sum = function(x,y){
    return x+y;
};

let big = BigInt(10e10);

console.log(typeof(array)); // an object
console.log(typeof(obj)); // an object
console.log(typeof(sum)); // an object function
console.log(typeof(big));
