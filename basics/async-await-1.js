function fetchDataFromAPI(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {message:"Hello World!"};
            resolve(data);
        },2000);
    })
}

async function getData(){
    console.log("Fetching data...");
    try{
        const result = await fetchDataFromAPI();
        console.log("Data received: ",result);
    }catch(error){
        console.log("Error fetching data: ",error);
    }
}

getData();
