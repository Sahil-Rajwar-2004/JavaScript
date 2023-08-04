const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task 1 completed");
        resolve()
    },1000)
});

promiseOne.then(function(){
    console.log("Promised 1 consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve();
    },5000)
}).then(function(){
    console.log("Promised 2 consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"John Doe",age:30});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"Alice",age:26});
        }else{
            reject("Something went wrong");
        }
    },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.userName;
})
.then((userName) => {
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("Something finished"));


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error){
            resolve({userName:"Alexander",age:38});
        }else{
            reject("Something went wrong");
        }
    },1000)
})

async function consumedPromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumedPromiseFive();


async function getAllUsers(){
    try{
        const respose = await fetch("https://api.github.com/users/Sahil-Rajwar-2004");
        const data = await respose.json();
        console.log(data);
    }catch(error){
        console.log("E: ",error);
    }
}
getAllUsers();


fetch("https://api.github.com/users/Sahil-Rajwar-2004")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
