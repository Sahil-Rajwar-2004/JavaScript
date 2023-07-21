let info = {
    email: "user@example.com",
    password: "<PASSWORD>",
    upi: "user@ybl"
}

let x = info;
x.email = "user@gmail.com";

console.log(info.email);
console.log(x.email);
