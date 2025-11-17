////////////////////////////////////////////////////////////DAY 1///////////////////////////////////////////////////////
/*


//Class give cleaner way to make object
//Class is blueprint to make Object
//

class Rectangle{
  constructor(length,breadth,color){
    this.length = length
    this.breadth = breadth
    this.color = color
  }
  //function inside the class is called method
  area(){ //area is the method 
    const area = this.length*this.breadth
    console.log("The area of rectangle",area);
  }
  paint(){
    console.log("The Paint is ",this.color);
  }
}

//new is use to create individual Object with different reference
//this refer the current object in which we are working
const rectangle1 = new Rectangle(45,56,'red'); //rectangle1 is the instance of rectangle class or object of a rectangle class
console.log(rectangle1.area()); 
rectangle1.paint()

//JS Classes

const now = Date.now()
const date = new Date()
console.log(date.setFullYear(2026));

//Map Class

let value = new Map();
value.set('name','Anurag')
console.log(value.get('name'));

// Promise class give you promise,that I will return Something in the future

setTimeout(fn,3000)
function fn(params) {
  console.log("Anurag");
}

// A promise in JS is an Object that represents the eventual completion or failure of 
// asynchronous operation and its resulting value
// It is syntactially superior way of writing callback

//Explain This

function setTimeOutPromisfied(ms) {
  return new Promise(function(resolve){
    setTimeout(resolve,ms)
  })
  // setTimeOutPromisfied return the object of the promise class
}

function callback() {
  console.log(`Three Second's Completed`);
}

const p = setTimeOutPromisfied(3000)
p.then(callback)

//Explain This

function promiseCallback(r) {
  setTimeout(r,3000)
}

function setTimeOutPromisfied() {
  return new Promise(promiseCallback)
} 

const p = setTimeOutPromisfied()

function callback() {
  console.log("3 second's Completed");
}

p.then(callback) //Promise based approach

// Explain This

function waitfor3s(resolve) {
  setTimeout(resolve,3000)
}

function main() {
  console.log("Three Second's Completed");
}

waitfor3s(main)

//Explain This

const fs = require('fs')
function readTheFile(sendTheFinalValueHere) {
  fs.readFile('./a.txt','utf-8',function(err,data) {
    sendTheFinalValueHere(data)    
  })
}

function readFile(filname) {
  return new Promise(readTheFile)
}

const p = readFile()

function callback(params) {
  console.log(params);
}

p.then(callback)


//Explain This

const fs = require('fs')

console.log('--------top  of the file----------');

function readTheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(function(){
    console.log("callback based setTimeout completed");
    resolve()
  },3000)
}

function setTimeOutPromisfied(filename) {
  console.log("SetTimeOutPromisified is called");
  return new Promise(readTheFile)
}

const p = setTimeOutPromisfied();

function callback() {
  console.log('Timer is Done');
}

p.then(callback)

console.log('------end of the file-------');

//Writing Promise class and Explain it

class Promise2{
  constructor(fn){
    function afterDone(params) {
      this.resolve();
    }
    fn(afterDone)
  }
  then(callback){
    this.resolve = callback;
  }
}

function readTheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(function(){
    console.log("callback based setTimeout completed");
    resolve();
  },3000)
}

function setTimeOutPromisfied(params) {
  return new Promise2(readTheFile)
}
  
let p = setTimeOutPromisfied();
function callback(params) {
  console.log('callback has been called');
}

p.then(callback)


// function SetTimeOutPromisified(ms) {
//   return new Promise(function(resolve){
//     setTimeout(resolve,ms)
//   })
// }

//callback appraoch

// function callback3() {
//   console.log("Hii There");
// }

// function callback2(params) {
//   console.log("Hello");
//   SetTimeOutPromisified(5000).then(callback3)
// }

// function callback() {
//   console.log("Hii");
//   SetTimeOutPromisified(3000).then(callback2)
// }

// SetTimeOutPromisified(1000).then(callback)

//callback approach Better approach

// SetTimeOutPromisified(1000).then(function(){
//   console.log("Hii");
//   return SetTimeOutPromisified(3000)
// }).then(function() {
//   console.log("Hello");
//   return SetTimeOutPromisified(5000)
// }).then(function() {
//   console.log("Hii There");
// })

//Async Await syntax in JS provides a way to write asynchronous code that
//looks and behaves alike synchronous code making it easier to read and maintain
//It is essentailly syntactic sugar on top of Promises

//Async await approach
// const ans = async () => {
//   const val1 = await SetTimeOutPromisified(1000);
//   console.log("Hii");
//   const val2 = await SetTimeOutPromisified(3000);
//   console.log("Hello");
//   const val3 = await SetTimeOutPromisified(6000);
//   console.log("Hii There");
// }

// ans()

// console.log("-----Hello There------");
// Note that async await is still using to solve promise in sync manner
// so it work same like async function like if call the function first Hello there out side async will be printed 
// async delegate task to Web API 
*/

// const fs = require('fs')

// function readFilePromisified(file) {
//   return new Promise(function(resolve,reject) {
//      fs.readFile(file,'utf-8',function(err,data) {
//         if (err) {
//           reject();
//         }else{
//           resolve(data)
//         }
//      })
//   })
// }

// function callback(data) {
//   console.log(data);
// }

// readFilePromisified('a.txt').then(callback).catch(function(){
//   console.log("File Is Not There");
// })

// readFilePromisified().then(callback).catch(function(){
//   console.log("File Is Not There");
// })

// let a = 45
// let b = a
// b = 56
// console.log(b);
// console.log(a);

// const fs = require('fs')

// function readFilePromisified(){
//   return new Promise(function(resolve,reject){
//     fs.readFile('./a.txt','utf-8',function(err,data){
//       if (err) {
//         reject("File de Bhai")
//       }else{
//         resolve(data)
//       }
//     })
//   })
// }

// readFilePromisified().then((data)=>{
//   console.log(data);
// }).catch((data)=>{
//   console.log(data);
// })


// function setTimeOutPromisfied(ms){
//   return new Promise(function(resolve){
//     setTimeout(resolve,ms)
//   })
// }

// setTimeOutPromisfied(1000).then(()=>{
//   console.log("Hello");
//   setTimeOutPromisfied(3000).then(()=>{
//     console.log("Hey");
//     setTimeOutPromisfied(5000).then(()=>{
//       console.log("Have Something");
//     })
//   })
// })


//Promise.all
// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("1 sec");
//       resolve();
//     }, 1000);
//   });
// }
// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("3 sec");
//       resolve();
//     }, 3000);
//   });
// }
// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("5 sec");
//       resolve();
//     }, 5000);
//   });
// }

// Promise.all([task1(), task2(), task3()]).then(() => {
//   console.log("All tasks done");
// });


// console.log("Hello");

// async function setTime(){
//   const value = await setTimeOutPromisfied(1000)
//   console.log("Hii");
//   const value1 = await setTimeOutPromisfied(3000)
//   console.log("Hello");
//   const value2 = await setTimeOutPromisfied(5000)
//   console.log("Hello");
// } 

// setTime()


// console.log("Hello");

// let name=null;
// console.log(name);

// function name(params) {
  
// }

// const name = function(){

// }

// IIFE
// (()=>{
//   console.log("Hello");
// })();
// (()=>{
//   console.log("Hello");
// })()

// const ans = undefined ?? 45
// console.log(ans);
// let arr = [1,2,3,4,5]

// for (const element of arr) {
//   console.log(element);
// }


// const obj = {
//   name:"Anurag"
// }

// for (const key in obj) {
//   console.log(key,obj[key]); 
// }

// const arr = [1,2,3,4,5]

// const ans  = arr.map((i)=>{
//   return i*2
// })
// console.log(ans);

// const ans1 = arr.filter(function(i){
//   return i%2==0
// })

// console.log(ans1);



// console.log('--------top  of the file----------');

// function readTheFile(resolve) {
//   console.log("readTheFile called");
//   setTimeout(function(){
//     console.log("callback based setTimeout completed");
//     resolve()
//   },3000)
// }

// function setTimeOutPromisfied(filename) {
//   console.log("SetTimeOutPromisified is called");
//   return new Promise(readTheFile)
// }

// const p = setTimeOutPromisfied();

// function callback() {
//   console.log('Timer is Done');
// }

// p.then(callback)

// console.log('------end of the file-------');

//Chitra
// top of the file 
//readTheFile called
//SetTimeOutPromisified is called 
//------end of the file-------
// callback based setTimeout completed
//Timer is Done


//Anurag
// --------top  of the file----------
// SetTimeOutPromisified is called
//readTheFile called
// ------end of the file-------
// callback based setTimeout completed
// Timer is Done

// function promiseCallback(r) {
//   setTimeout(r,3000)
// }

// function setTimeOutPromisfied() {
//   return new Promise(promiseCallback)
// } 

// const p = setTimeOutPromisfied()

// function callback() {
//   console.log("3 second's Completed");
// }

// p.then(callback) //Promise based approach

// function task1() {
//   return new Promise(function(resolve){
//     setTimeout(resolve,1000)
//   })
// }

// function task2() {
//   return new Promise(function(resolve){
//     setTimeout(resolve,3000)
//   })
// }

// function task3() {
//   return new Promise(function(resolve){
//     setTimeout(resolve,5000)
//   })
// }

// Promise.all([task1(),task2(),task3()]).then(()=>{
//   console.log("All Promises Completed");
// })

// const ans =  45 ?? undefined
// console.log(ans);

// function sum(a,b){
//   return a*b
// }

// const sum =(a,b)=>a+b
// console.log(sum(45,56));
