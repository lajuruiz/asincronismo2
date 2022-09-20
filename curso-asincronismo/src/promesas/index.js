
const promise = new Promise(function(resolve, reject){
    resolve(" hey todo esta bien");
});

//then catch

const cows = 19;

const countCows = new Promise(function(resolve,reject){
    if(cows >10){
        resolve(`We have ${cows} cows on the farm`)
    } else{
        reject("There is not cows on the farm ")
    }
})

countCows
    .then((result) => {
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>console.log("Finally"));