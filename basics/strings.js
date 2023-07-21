let name = "Sahil";
let age = 19;

//console.log("I'm "+name+" and I am "+age+" years old"); // bad practice
// console.log(`I'm ${name} and I'm ${age} years old`); // good practice

let str1 = "Sahil";
let str2 = new String("Sahil"); 

// console.log(str1 == str2); //true
// console.table([typeof(str1), typeof(str2)]); // string, object

let fullName = "Sahil Rajwar";

let firstName = fullName.split(" ")[0];
let lastname = fullName.split(" ")[1];
console.log(firstName);
console.log(lastname)

