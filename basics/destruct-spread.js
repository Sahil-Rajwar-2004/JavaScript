// destructuring 
let array = [1,2,3,4,5,6,7];
let [x,y,z,a,b,...rest] = array;
let [q,,e,...all] = array;
let {k,l} = {k:0,l:1}


// using spread
function sum(x,y,z){
    return x+y+z;
}

console.log(x,y,z,a,b,rest);
console.log(q,e,all);
console.log(k,l);

console.log(sum(...[1,4,9]));
