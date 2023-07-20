const pi = 3.14159265358;
var e = 2.71828182845;
let x = 8.53973422267;
y = 1.15572734979;

/*
    using var in the project can be the nightmare because of using var varible you will have block scope problems
    instead of using var, prefer to use const for immutable data and use let for mutable data with block scope free problems
*/

console.table([pi,e,x,y]);
