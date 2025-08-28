
//code 1
const t1 = performance.now();


for(let i =0; i<101 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is para" + i;
    document.body.appendChild(para); 
}

const t2 = performance.now();
console.log("total time taken to run the code 1: " + (t2-t1));


// //code2

// const t3 = performance.now();
// //yaha ek div create karo and then append the div into the body 
// let myDiv = document.createElement('div');
// for(let i =0; i<101 ; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para" + i;
//     myDiv.appendChild(para);
// }
// //now append the div to body
// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("total time taken to run the code 2: " + (t4-t3));


//best code

let fragment = document.createDocumentFragment();
for(let i =0; i<101 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is para" + i;
    //here this line will take 0 reflows and repaints
    fragment.appendChild(para);
}

// but this will take one
document.body.appendChild(fragment);