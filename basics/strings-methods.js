// const input = require("prompt-sync")();

let sentence = "We should add sugar to coffee instead of adding coffee to sugar";
// let index = input("number? ");
// index = parseInt(index); // doesn't matter whether we convert it to int or not

// console.log(`at ${index} we found ${sentence.at(index)}`); // o
// console.log(`at ${index} we found ${sentence.charAt(index)}`); // o
console.log(sentence.slice(0,10));
console.log(sentence.indexOf("sugar"));
console.log(sentence.replace("sugar", "coffee",1));

console.log(sentence.search("coffee"));
console.log(sentence.toUpperCase()); // to upper case each element
console.log(sentence.toLowerCase()); // to lower case each element

console.log(sentence.charCodeAt(0)); // gives the ascii code of the element
console.log(sentence.codePointAt(2)); // gives the ascii code of the element

let emoji = "🚀";
console.log(emoji.charCodeAt(0));
console.log(emoji.codePointAt(0));

