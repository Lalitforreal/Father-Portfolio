// let firstPromise = new Promise((resolve,reject)=>{
//     // console.log("Lalit Singh")
//     // resolve(1001);
//     // // reject(Error("reject hogya error throw hoga ab"))

//     //now async code
//     function sayMyName(){
//         console.log("Lalitttt")
//     }
//     setTimeout(sayMyName, 10000); //DELAY OF 10 SEC
//     resolve(69);
// });



// let promise1 = new Promise((resolve, reject)=>{
//     let success = false;
//     if(success){
//         resolve("Promise fulfilled")
//     }else{
//         reject("Promise rejected")
//     }
// });

// promise1.then((message)=>{
//     console.log("if promise good then " + message);
// }).catch((error)=>{
//     console.log("if promise is not fullfilled then: " + error);
// });

// let promise1 = new Promise((resolve, reject)=>{
//     let success = false;
//     if(success){
//         resolve(10)
//     }else{
//         reject("Internal server error")
//     }
// });

// promise1.then((message)=>{
//     console.log("Pehla msg: " + message)
//     return 20;
// }).then((message)=>{
//     console.log("Dusra msg:  " + message)
//     return 30;
// }).then((message)=>{
//     console.log("third msg:  "+ message)
// }).catch((error)=>{
//     console.error(error);
// }).finally(()=>{
//     console.log("Mai toh final hu, kuch bhi karo mai toh chalunga ")
// })


let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000, "first");
});

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve,2000, "second");
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(reject,3000, "third");
});

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values)
})
.catch((error)=>{
    console.error("error: "+ error)
})