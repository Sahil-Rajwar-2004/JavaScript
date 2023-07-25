// An Object that contains multiple object within the object is called an Nested Object.

const User = {
    email: "abc@example.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

// console.log(User);

// console.log(User.fullName.userFullName.firstName);
// console.log(User.fullName.userFullName.lastName);

let obj1 = {1:"a",2:"b"};
let obj2 = {3:"c",4:"d"};
let obj3 = {5:"e",6:"f"};

// let obj4 = {obj1,obj2,obj3};
// let obj4 = Object.assign({},obj1,obj2,obj3);
// let obj4 = {...obj1,...obj2,...obj3};

// console.log(obj4);

let users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Mary"
    },
    {
        id: 3,
        name: "Peter"
    }
]

// console.log(users[1].name);

// console.log(Object.keys(users));
// console.log(Object.keys(users[0]));

// console.log(Object.values(users));
// console.log(Object.values(users[0]));

let course = {
    courseName: "JavaScript",
    instructor: {
        firstName: "John",
        lastName: "Doe"
    },
    price: 0
}

let {instructor: faculty} = course;

// console.log(instructor); // Object de-structure
// console.log(faculty);
