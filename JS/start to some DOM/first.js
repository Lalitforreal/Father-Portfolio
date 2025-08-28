// var global = 24;
// if( global == 24){
//     console.log("Global hai ji")
// }


// function example(){
//     var x = 25; //this is called function scoped var
//     console.log(x)
// }
// example();

// console.log(x) // this will lead to an error cause x toh local hai,if y ou exclude this, no issues

// {
//     let a = 10;
//     console.log(typeof(a))
// }

// let ans = (false || true || false ||true);
// console.log(ans)

// let ans = 12;
// switch (ans){
//     case 10: console.log("na")
    
//     case 11 : console.log("hell nah")

//     case 12 : console.log("fuck yeaa")

//     default : console.log("hehe")

// }

// for(let i = 0; i<=10; i++){
//     console.log("bhalwu boyyyy")
// }

// let i= 0;
// do{
//     console.log("bhalwu boy")
//     i++;
// }while(i<11);


// let a = "Hellobaby"
// console.log(a.substring(2))

// let a = "hello this is mr.Fantastic hehe"
// let words = a.split(" ");
// console.log(words)


// function funcSum(num1,num2,num3){
//     return num1+num2+num3;
// }
// let sum = funcSum(3,6,7);
// console.log(sum)


//how to equate funtion with a var

// let solve = (num1, num2)=>{
//     return num1*num2;
// }
// console.log(solve(3,5))

// let obj = {
//     name : "Lalit",
//     age : 17,
//     hobby : "yap",
//     greet(){
//         console.log("hello ji")
//     }
// }
// console.log(obj)
// obj.greet();


// let arr = [1,2,"'babbar", true, 5, 9];
// console.log(arr)
// arr.push(10);  //insert at end
// arr.pop; //remove from last index
// console.log(arr)
// arr.shift(); //remove the first element of the array 
// arr.unshift("hey") //adds element in the start of the array
// console.log(arr)

// let sliceArr =arr.slice(2,4); //idhar 2nd index se 4th tak slice/remove hojaega and youhave to store it to print it
// console.log(sliceArr)                //4TH WILL BE EXLUDED so it'll cut just 2 and 3

// let arr2 = [1,2,"'babbar", true, 5, 9];
// arr2.splice(1,2,"Lalit"); //splice means (1,2,__) 1st index se "2" values remove karo a
//                                     //and replace them with wahtever you've put in there
// console.log(arr2)

// let arr = [1,2,4,5];
// let mapFunc = arr.map((num)=>{
//     return num*num;
// })
// console.log(mapFunc)

// let arr= [2,5,7,9,12,23]; //if even print true else false using filter
// let filterFunc = arr.filter((number)=>{
//     if(number %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(filterFunc) 

// let arr = [1,2,"lalit", "saroja", "hapi hapi", 24,33];
// let filterStr = arr.filter((value)=>{
//     if(typeof(value) === 'string'){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(filterStr)

// let arr = [10,20,40,30];
// let reduceFunc = arr.reduce((acc, curr)=>{
//     return acc+curr;
// }, 0) //the 0 here is waht you initialized the accumulator wala var to be
// console.log(reduceFunc)


// let arr = [9,5,6,8,2,3,1];
// let loopFe = arr.forEach((number ,index)=>{
//     console.log("Number:", number + " Index: ", index)
// })

// obj = {
//     name : "Lalit",
//     age : 18,
//     profession : "student",
//     disappointment : "krish",
// }
// for(keys in obj){
//     console.log(keys + ":  " + obj[keys])
// }

// let arr = [10,20,30,33];
// for(value of arr){
//     console.log(value)
// }

// let stringG = "Krish sale";
// for(value of stringG){
//     console.log(value)
// }

// let arr= [20,1,24,34,55];

// function getSum(arr){
//     let sum = 0;
//     arr.forEach((value)=>{
//         sum =sum+value;
//     })
//     return sum;
// }
// console.log(getSum(arr))

// console.log(sayMyName("Babbar"))

// function sayMyName(name){
//     return name;
// }

//FUNCTION CALL THEORUY

// let greetFunc = function(){
//     console.log("Hello ji")
// }
// greetFunc(); //assigned to variable

//pass as arguments

// let greetFunc = function(greet, fullName ){ //greet me wale func ke andar greet callkardia
//     console.log("hello", fullName)
//     greet();


// }

// let greet = function(){
//     console.log("Hello ji")
// }
// greetFunc(greet, "Lalit Singh"); //mai isko greet wale func ke upar nahi likh sakta cause maine usko let me store kara hai and you already know about hoisting 

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5); //here this outervariable is called but never used 
// let finalAns = ans(10); //this is where the inner function is called
// console.log(finalAns)

// let arr = [
//     function first(a,b){
//         return a+b;
//     },
//     function first(a,b){
//         return a-b;
//     },
//     function first(a,b){
//         return a*b;
//     }
// ]
// let first = arr[0];
// let ans = first(10,5);
// console.log(ans)


// let obj = {
//     name: 'Lalit',
//     age : 18,
//     greet : ()=>{
//         console.log("Hey beech")
//     }
// }

// obj.greet();

// class Human{
//     name = 'Lalit';
//     #age;
//     weight = 80;

//     constructor(newName, newAge){
//         this.name = newName;
//         this.#age = newAge;
//     }

//     walking(){
//         console.log("I am walking")
//     }

//     running(){
//         console.log("I am running")
//     }

//     get fetchAge(){
//         return this.#age;
//     }

//     set updateAge(val){
//         this.#age = val;
//     }
// };

// let naam = new Human("Krish", 69); //here is where you'll pass the constructors parameters
// console.log(naam.fetchAge)
// console.log(naam.name)


// function sayMyName(fName = "Lalit",lName =fName.toUpperCase()){
//     console.log(fName,lName)
// }
// sayMyName();

// function solve(details = {name : "Lalit", weight : 111,}){
//     console.log(details)
// }
// solve();


// function getAge(){
//     return 18;
// }

// function ehe(name, age = getAge()){
//     console.log(name, age)
// }
// ehe("Lalit",);

// let curr = new Date();
// let date = new Date('June 20 1998 07:05');
// let newDate = new Date(1968, 4, 21, 7);   //(year, month(0-11), date, time)
// // console.log(newDate)
// // console.log(newDate.getDate())
// console.log(newDate.setFullYear(2005))
// console.log(newDate.getFullYear())

// let obj = {
//     name : "Lalit",
//     age : 18,
//     height : "6'1 ft"
// }

// let copy = {...obj};

// let copy = Object.assign({}, obj);
// console.log(copy)

//using iteration 
// let copy = {};
// for(let key in obj){
//     let newKey = key;
//     let newVal = obj[key];
//     //insert in the new object clone 
//     copy[newKey] = newVal;
// }
// console.log(copy)

let element = document.getElementByClassName("fhead");
console.log(element)