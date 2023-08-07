const axios = require("axios");

axios
.get("https://www.boredapi.com/api/activity")
.then((response) => {
    console.log(response.data.activity);
})
.catch(error => {
    console.log(`Error: ${error}`);
})