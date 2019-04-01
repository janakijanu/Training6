onmessage=function(e){
    console.log("Message received from main script");
    var sum= '';
    for(i=0;i<=e.data.key2;i++){
        console.log(i);
        sum+=' '+e.data.key1;
    }
    console.log("Posting message back to main script");
    postMessage(sum);
}