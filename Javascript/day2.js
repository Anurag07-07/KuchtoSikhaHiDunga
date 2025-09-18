// Js is Interpreted Language 
//Java is Object Oriented Language
//Javascript is proto-type-based Language
//JavaScript is Dynamic Language
//console.log("Hello World");
//throw new Error("Something wents Wrongs")



// const date = new Date()
// console.log(date.toDateString());
// int somthing = 45;
// console.log(somthing);

// let somthing = 45;
// console.log(somthing);

// somthing = "Anurag"
// console.log(somthing);

// somthing = true
// console.log(somthing);

// console.log(5)
// console.log("Javascript");
// console.log(true);

// let first_name = "Anurag"
// console.log(first_name);

// var 

// let lang=null;
// console.log(lang);

// int char boolean string float long short byte double in Java /C++
// let num = 454665
// console.log(num);
// num = 454.23232
// console.log(num);
// num = 54545646512121323213331131321n
// console.log(num);

// let lang = 'J'
// console.log(typeof lang);
// lang = 'JS'
// console.log(lang);


// let check = true
// console.log(check);
// check = false
// console.log(check);

// let v;
// console.log(v);
// v = null
// console.log(v);

// let lang1= "JS"
// console.log(lang1);

// let lang2 = lang1
// console.log(lang2);
// lang2 = "TS"
// console.log(lang1);
// console.log(lang2);

//Array
// let arr= [1,2,3,5,4]
// arr = [{name:"Anurag"},{name:"Aniket"}]
// console.log(arr);

//Object

// let obj = {
//   name:"Anurag",
//   lang:["JS","TS"]
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj['lang']);
// obj['graduation'] = "Not Completed"
// console.log(obj);

// function name (){
//   console.log("Anurag");
// }
// name()

// let obj1 = {
//   lang:"JS"
// }

// let obj2 = obj1
// console.log(obj1);
// console.log(obj2);

// obj2.lang = "TS"
// console.log(obj1);
// console.log(obj2);

// let person = [
//   {
//   name:"Anurag",
//   gender:"Male",
//   age:21
// },
// {
//   name:"Anuradha",
//   gender:"Female",
//   age:20
// }]

// function Greet(arr) {
//   if (arr.gender === 'Male') {
//     console.log(`Hello Mr. ${arr.name}`);
//   }else if(arr.gender =="Female"){
//     console.log(`Hello Ms. ${arr.name}`);
//   }
// }

// Greet(person[1])


// const users = [
//   {
//     name:"Anurag",
//     gender:"Male",
//     age:12
//   },
//   {
//     name:"Anuradha",
//     gender:"Female",
//     age:15
//   },{
//     name:"Aniket",
//     gender:"Male",
//     age:20
//   },{
//     name:"Aditya",
//     gender:"Male",
//     age:17
//   }
// ]
// for (let i = 0; i < users.length; i++) {
//   let value = users[i]['name']
//   console.log(value);
// }


// function Minors(users) {
//   let arr = [];
//    users.forEach((u)=>{
//     if (u.age < 18) {
//       arr.push(u.name)
//     }
//   })
// return arr
// }

// let min = Minors(users)
// console.log(min);


//Synchronous code

// const fs = require('fs')
// const { resolve } = require('path')



// let message = fs.readFileSync('./a.txt','utf-8')
// console.log(message);

// console.log("Command Executed");


//Async code

// console.log("Command Running");

//  fs.readFile('','utf-8',(err,data)=>{
//   if (err) {
//     console.log(`Hey Give me a file `);
//   }else{
//     console.log(data);
//   }
// })
// console.log("Command Executed");

// function sum(a,b){
//   return a+b
// }

// function multiply(a,b){
//   return a*b
// }


// function call(a,b,func){
//   return func(a,b)
// }
// let ans = call(45,46,sum)
// console.log(ans);

// const date1 = Date.now()

// console.log("Command Executed");


// function SetTimeOutSync(ms){
//   let startTime = Date.now()
//   while(true){
//     let currentTime = Date.now()
//     if (currentTime-startTime >=ms) {
//       return
//     }
//   }
// }

// SetTimeOutSync(3000)


// console.log(`The Time taken to execute the program`);

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }
// let i = 0
// while (i<arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// for (const element of arr) {
//   console.log(element);
// }

// const ans =arr.map((u)=>{
//   return u
// }).filter((f)=>{
//   return f%2==0
// })
// console.log(ans);


// console.log(ans);


// arr.forEach((u)=>console.log(u*2))


// let obj = {
//   lang:"JS",
//   fullname:"Javascript"
// }

// Object.keys(obj).forEach((key)=>{
//   console.log(key);
// })


let arr = [1,2,3,4,5]

// for (let index = 0; index <= arr.length-1; index++) {
//   console.log(arr[index]);
// }

// let i = 0
// while (i<arr.length) {
//   console.log(arr[i]);
//   i++
// }

// const ans = arr.map((v)=>{
//   return v*2
// }).filter((f)=>{
//   return f%2!=0
// })
// console.log(ans);

// arr.forEach((v)=>{
//   v*2
// })
// console.log(arr);

// for (const element of arr) {
//   console.log(element);
// }

// let obj = {
//   name:"JS",
//   fullname:"Javascript"
// }

// Object.keys(obj).forEach((key)=>{
//   console.log(key);
// })

// Object.values(obj).forEach((value)=>{
//   console.log(value);
// })

// Object.entries(obj).forEach(([key,value])=>{
//   console.log(key,value);
// })

// for (const key in obj) {
//   console.log(`${key} : ${obj[key]}`);
// }

// class Car{
//   constructor(name,brand,color){
//     this.name = name
//     this.brand = brand
//     this.color = color
//   }

//   static horn(){
//     console.log(`${this.bra}`);
//   }
// }

// Car.horn()

// const date = new Date()
// console.log(date.getDate());

// const m = new Map()
// m.set('name','JS')
// m.set('fullname','Javascript')

// console.log(m.get('name'));

// new Promise(function(resolve,reject){

// })

// function readFileAsync() {
//   return new Promise(function(resolve,reject){
//     fs.readFile('','utf-8',(err,data)=>{
//       if (err) {
//         reject("Please give me a file")
//       }else{
//         resolve(data)
//       }
//     })
//   })
// }

// readFileAsync().then(callback1).catch(callback2)

// function callback1(value) {
//   console.log(value);
// }

// function callback2(value) {
//   console.log(value);
  
// }

// function setTimeOutP(ms){
//   return new Promise(function(resolve){
//     setTimeout(resolve,ms)
//   })
// }
/*
1 sec => Hello
3 sec => Hi
5 sec => Hey

*/ 
// setTimeOutP(1000).then(function(){
//   console.log(`Hello`);
//   setTimeOutP(3000).then(function(){
//     console.log('Hi');
//     setTimeOutP(5000).then(function(){
//       console.log(`Hey`);
//     })
//   })
// })

// setTimeOutP(1000).then(function(){
//   console.log(`Hello`);
//   return setTimeOutP(3000)
// }).then(function(){
//   console.log(`Hi`);
//   return setTimeOutP(5000)
// }).then(function(){
//   console.log(`Hey`);
// })

// async function Time(){
//   const value = await setTimeOutP(1000)
//   console.log("Hello");
//   const value1 = await setTimeOutP(3000)
//   console.log("hi");
//   const value2 = await setTimeOutP(5000)
//   console.log("Hey");
// }
// Time()

// const users = [
//   {
//     name:"Anurag",
//     gender:"Male",
//     age:12
//   },
//   {
//     name:"Anuradha",
//     gender:"Female",
//     age:15
//   },{
//     name:"Aniket",
//     gender:"Male",
//     age:20
//   },{
//     name:"Aditya",
//     gender:"Male",
//     age:17
//   }
// ]

// function Minors(users) {
//   let arr = []
//   users.map((i)=>{
//     if(i.age<=18){
//       const obj  = {
//         name:i.name,
//         gender:i.gender
//       }
//       arr.push(obj)
//     }
//   })  
//   return arr
// }

// const ans = Minors(users)
// console.log(ans);


// let sum = (a,b)=>{
//   return a+b
// }

// let multiply = (a,b)=>{
//   return a*b
// }

// function callback1(a,b,cb) {
//   return cb(a,b)
// }

// const ans = callback1(45,56,sum)
// console.log(ans);


// class Car{
//   constructor(name,brand){
//     this.name = name
//     this.brand = brand
//   }
//   paint(){
//     console.log("Car color is Black");
//   }
// }

// Car.paint()
