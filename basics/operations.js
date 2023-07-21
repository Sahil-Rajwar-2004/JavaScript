/*
    console.log(1+1);
    console.log(1-1);
    console.log(1*1);
    console.log(1**2);
    console.log(1%3);
*/

let a = "1"+2;
let b = "1"+"2";
let c = 1+"2";
let x = "1"+2+3;
let y = 1+2+"3";

console.table([a,b,c,x,y]);
console.table([
    typeof(a),
    typeof(b),
    typeof(c),
    typeof(x),
    typeof(y)
]);

