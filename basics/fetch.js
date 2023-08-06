let userName = "Sahil-Rajwar-2004";
const P = fetch(`https://api.github.com/users/${userName}/repos`);

P.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
})
.then((value) => {
    console.log(value);
})
