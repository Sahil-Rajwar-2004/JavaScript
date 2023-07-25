
let mysymbol = Symbol("keys");

let credentials = {
    userName: "ADMIN",
    password: "<PASSWORD>",
    [mysymbol]: "key",
    age: 19,
    location: "New Delhi, INDIA",
    email: "<EMAIL>",
    isLoggedIn: false,
    lastLogin: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
}

// console.log(credentials["userName"]);    // access the value of a key
// console.log(credentials.age);            // access the value of a key
// console.log(credentials[mysymbol]);      // access the value of a key which is a symbol

// console.log(credentials);

// Changing the values

credentials["location"] = "New Your City, USA";
credentials.isLoggedIn = true;
credentials[mysymbol] = "new key";
console.log(credentials);

// Object.freeze(credentials);

// credentials["password"] = 12345;
// console.log(credentials);

credentials.greetings = function(){
    console.log("Hello World!");
}

credentials.greet = function(){
    console.log(`Hello World! ${this.userName}`);
}

console.log(credentials.greetings());
console.log(credentials.greet());

