/////////////////////////////////////////////////////DAY 1/////////////////////////////////////////////////////
/*
console.log("Hello World");

// React and Next are a popular library and framework for building user interfaces.

// React is a library for building user interfaces.
// Next is a framework for building server-side rendered (SSR) React applications.

//Browser understanding HTML, CSS, and JavaScript and Web Assembly

//Web Assembly is a new type of code that can run in any browser.
//Assembly code that can run on any browser.
//Like c++ or rust code

//JS is interpreted language
//JS is a single threaded language that can be non-blocking
//Non-blocking means that the execution of other operations will not be held up by the completion of a particular operation.

//JS is a prototype based language
// A prototype-based language is a style of object-oriented programming in which classes are not present. 
// Instead, behavior reuse (known as inheritance) is performed via a process of cloning existing objects that serve as prototypes.
// JavaScript is an example of a prototype-based language, where objects can directly inherit from other objects.
// This allows for more dynamic and flexible object creation and inheritance patterns compared to class-based languages.
// JS is a dynamic language
// JS is a weakly typed language

//C++ compile the code and convert it to machine code that can run on any machine
//JS can run on any machine that has a JS engine

let my_name = "Anurag"
console.log(my_name);

//Garbage collection is the process by which unused objects are removed from memory.
//JS uses automatic garbage collection.
//JS uses garbage collection to free up memory.

function greet(person) {
  if (person['gender'] =='Male') {
    console.log(`Hello Mr. ${person['name']}`);
        
  }else{
    console.log(`Hello Miss. ${person['name']}`);
  }
}

let person = [{
  name:"Anurag",
  gender:"Male",
  age:21
},
{
  name:"Anuradha",
  gender:"Female",
  age:20
}]

greet(person[0])

const users = [
  {
    name:"Anurag",
    gender:"Male",
    age:12
  },
  {
    name:"Anuradha",
    gender:"Female",
    age:15
  },{
    name:"Aniket",
    gender:"Male",
    age:20
  },{
    name:"Aditya",
    gender:"Male",
    age:17
  }
]

function greet(users) {
  const minors = []
  users.forEach(element => {
    if (element['age']< 18 && element['gender'] =='Male') {
      let obj = {
        name:element['name'],
      }
      minors.push(obj)
    }
  });
  return minors;
}

console.log(greet(users));
*/

/////////////////////////////////////////////////////DAY 2/////////////////////////////////////////////////////
/*

function sum(n) {
  let value = parseInt(n);
  return value*(value+1)/2;
}

console.log(sum('10'));


//Synchronous code
//is executed line by line,in the order it's written ,Each operations waits for previous 
//one to complete before moving on to the next one

//I/O Intensive task 
//That are waiting for some external event like user input,network request,file read/write 
//CPU intensive task
//That are computationally intensive and require a lot of processing power


const fs = require('fs')

//Synchronous code
//Synchronous fs readfile not require callback function
//It will block the execution of the code until the file is read
// it allows to work with file System in a synchronous manner
const content = fs.readFileSync('./a.txt','utf-8')
console.log(content);


//Asynchronous code
//Asynchronous fs readfile require callback function
//It will not block the execution of the code until the file is read
fs.readFile('./a.txt','utf-8',(err,data)=>{
  console.log(data);
})


fs.readFile('./b.txt','utf-8',function(err,data){
  console.log(data);
})

//Function Arguments
//When the function passed as argument to another function is called as callback function or functional Argument 

function sum(a,b) {
  return parseInt(a)+parseInt(b);
}

function multiply(a,b) {
  return parseInt(a)*parseInt(b)
}

function divide(a,b) {
  return parseInt(a)/parseInt(b)
}

function sub(a,b) {
  return parseInt(a)-parseInt(b)
}

function operation(a,b,cb) {
  return cb(a,b)
}

let ans = operation(10,20,sum)
console.log("The Sum is:",ans);

let ans2 = operation(10,20,multiply)
console.log("The Multiply is:",ans2);

let ans3 = operation('10','20',divide)
console.log("The Divide is:",ans3);

let ans4 = operation(10,20,sub)
console.log("The Sub is:",ans4);


//Explain This

function timeout() {
  console.log("Click The Button");
}

console.log("Hii");

setTimeout(timeout,5000)  //timeout is function signature and 5000 is time in milliseconds

let c = 0;
for (let index = 0; index < 1000000000; index++) {
  c++;
}

console.log("Done");


//Make setTimeout a Synchronous function

function setTimeoutSync(ms) {
  let startTime = Date.now()
  while (1) {
    let currentTime = Date.now()
    if (currentTime - startTime >= ms) {
      break;
    }
  }
  return "Done";
}

console.log(setTimeoutSync(1000));


*/