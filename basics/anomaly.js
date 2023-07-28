// This is the program where we will see some ridiculous things happening.

console.log(0.5+0.1 == 0.6);
console.log(0.1+0.2 == 0.3);

console.log(Math.max());
console.log(Math.min());

// I have no idea what is happening here.
console.log([]+[]);
console.log([]+{});

// true = 1, false = 0
console.log(true+false == 1);
console.log(true+true == 2);
console.log(false+false == 0);
console.log(true-true == 0);

console.log(true === 1); // it will check the datatypes first when we use "==="
console.log(true == 1); // it will give true because it will not gonna check for the datatypes

console.log((!+[]+[]+![]).length); // how?

console.log(9+"1");
console.log(91-"1");

console.log([] == 0);
