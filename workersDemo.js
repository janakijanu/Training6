onmessage=function(e){
    console.log("Message received from main script");
    var sum=0;
    for(i=0;i<=e.data;i++){
        console.log(i);
        sum+=i;
    }
    console.log("Posting message back to main script");
    postMessage(sum);
}