const axios = require("axios");

async function fetchGitHubUser(username){
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    return user;
}

async function getUserProfile(){
    try{
        const username = "Sahil-Rajwar-2004";
        const user = await fetchGitHubUser(username);
        console.log("User data:",user);
    }catch(error){
        console.error("Error fetching user data:", error);
    }
}

getUserProfile();
