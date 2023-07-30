let user = {
    userName: "sudo",
    password: "<PASSWORD>",

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the server!`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "admin";
// user.welcomeMessage();
console.log(this);

function useless(){
    console.log(this);
}
useless();


