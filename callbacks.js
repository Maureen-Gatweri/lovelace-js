function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback();
}

function intro(){
    console.log(`This is me`)
}
greet(`Hellen`, intro);

//Using setTimeOut() and setInterval()

setTimeout(intro, 10000);


const interval = ()  =>{
    console.log(`Execute me`);

}
setInterval(interval,3000);




//Closures
//lexical scope