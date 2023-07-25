let sym1 = Symbol('x');
let sym2 = Symbol('y');
let sym3 = Symbol('x');

let sym4 = Symbol(1);
let sym5 = Symbol(1);

console.log(sym1 === sym3);
console.log(sym4 === sym5);

console.log(typeof sym1);
