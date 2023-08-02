let cities = ["Tokyo","New York City","Houston","Paris","Mumbai","New Delhi"];

// slice()
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from
    // start to end (end not included) where start and end represent the index of items in that array.
    // The original array will not be modified.

// splice()
    // The splice() method changes the contents of an array by removing or replacing
    // existing elements and/or adding new elements in place.

console.log(cities.slice(2));
console.log(cities.slice(2,4));
console.log(cities.slice(1,5));
console.log(cities.slice(-2));
console.log(cities.slice(2,-1));
console.log(cities.slice());

// console.log(cities.splice(2));
console.log(cities.splice(1));
// console.log(cities.splice(1,5));
// console.log(cities.splice(-2));
// console.log(cities.splice(2,-1));
// console.log(cities.splice());
