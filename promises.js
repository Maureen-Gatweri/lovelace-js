const internship = false;
const ourPromise = new Promise((resolve, reject)=>{
    if (internship){
        resolve('I made it');
    }
    else{
        reject('Pray for me')
    }
}).then(() =>{
    console.log("I will be confirmed")

})
.catch(()=>{
    console.log("I will work hard")
})
.finally(()=>{
    console.log("I will be successfull")
});



//console.log({ourPromise});


const successWish = async()=>{

try{
    await ourPromise;
    console.log('My successful wish')
}
catch{
    console.log('My wish is not successful')
}
}
successWish();