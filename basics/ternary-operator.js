const greeting = (person) => {
    const name = person?person.name:"stranger";
    return `Howdy, ${name}`;
};

const beverage = (age) => {
  return age>21?"Beer":"Juice";
}

console.log(greeting({name: "Alice"}));
console.log(greeting(null));
console.log(beverage(22));
