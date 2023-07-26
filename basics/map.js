let array = [1,4,9,16];
let mapping = array.map(x => x*2);

console.log(mapping);

console.log(
    [1,0,3].map((x,index,array) => {
        console.log(`Visit ${index} [${array}]`);
        return x*2;
    })
);

console.log(["1","2","3"].map(parseInt))
x = ["1","2","3"].map((x) => parseInt(x));
y = ["1","2","3"].map(Number);

console.log(x);
console.log(y);
console.log(x == y);
