function doSomething(callback){
    setTimeout(function(){
        console.log("Async operation is done!");
        callback();
    },2000)
    console.log("processing...");
}

function handleCallback(){
    console.log("Callback function executed!");
    console.log("Done!");
}

doSomething(handleCallback);
 