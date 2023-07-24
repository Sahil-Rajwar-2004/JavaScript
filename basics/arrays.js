let array = [1,2,3,4,5];

// console.log(array[1]);

let tech1 = ["Apple","Samsung","Google","Tesla","Microsoft"];
let tech2 = ["TATA","Mahindra"];

// tech1.push(tech2);
// tech1.concat(tech2);

// let all_techs = [...tech1,...tech2];
// console.log(all_techs);

let numbers = [1,2,3,[4,5,6],[7,[8,9]]];
console.log(numbers.flat(Infinity)); // to single array

console.log(Array.isArray(["Hello"]));
console.log(Array.from(["Hello"]));
console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


// array.push(4); // add number at last index
// array.pop(); // remove number at last index
// array.unshift(1); // add number at first index
// array.shift(); // remove number at first index


// console.log(array.includes(4));   // check the presence of a number
// console.log(array.indexOf(1)); // give the position of a number

// console.log(array);
// console.log(array.slice(1,3)); // 1 included and 3 excluded and doesn't manipulate the orginal array
// console.log(array);
// console.log(array.splice(1,3)); // 1 and 3 both are included and manipulate the orginal array
// console.log(array);

