console.log("Hello");

// let a:number = 45
// let b:string = 45
// let c:number = a/b
// console.log(c);


// let myName:string = "Anurag Raj"
// console.log(myName);
// let meaningOfLife:number = 22
// console.log(meaningOfLife);
// let album:any; //It is Used when we don't Know the Datatype
// album = 2002
// console.log(album);


// const sum = (a:number,b:string)=>{
//   return a+b
// }
// console.log(sum(9,"AJ"));

// const sum = (a:number,b:number):number =>{
//   return a+b
// }
// console.log(sum(45,45));

// Union Type
// let value: string | number //It is used when we know that variable is either number or string
// let isActive:number | boolean;
// isActive = 1
// console.log(isActive);
// isActive = false
// console.log(isActive);

// let value:number | string = "Anurag" 

// Regex Type
// let reg:RegExp = /\w+/g
// console.log(reg);

// let a:RegExp = /[A-Z]/

// Q1 Create a function printValue whose parameter is of type string | number.
// If a number is passed, print "Number is X".
// If a string is passed, print "String is Y".
// Then call this function twice — once with a number and once with a string.

// function printValue(param:string | number ){
//   if(typeof param === 'number'){
//     console.log(`Number is ${param}`);
//   }
//   if(typeof param === 'string'){
//     console.log(`Number is ${param}`);
//   }
// }
// printValue(45)
// printValue("Anurag")

// Q2 Create a variable emailReg:RegExp that validates an email (for example /^[\w.-]+@[\w.-]+\.\w+$/).
// Then write a function validateEmail(email:string):boolean that returns true if the email is valid, otherwise false.
// validateEmail("test@gmail.com") // true
// validateEmail("abc@.com") // false

// let emailReg:RegExp = /^[\w.-]+@[\w.-]+\.\w+$/

// function validateEmail(email:string):boolean{
//   if(emailReg.test(email)){
//     return true
//   }
//   return false
// }
// const ans =  validateEmail("test@gmail.com")
// console.log(ans);
// const ans1 = validateEmail("abc@.com")
// console.log(ans1);

// let stringArr = ['one','two','three']
// let guitars = ['Strat','Lrs pAul',5150]
// let mixedData = ['EVH',1984,true]

// stringArr[0] = 'John'
// stringArr.push(42) //Type Number is Not Assignable to type String

//Guitar array accept number and String
// guitars[0] = 1984
// guitars.unshift('Cody')

//Mixed data accept number boolean string
// mixedData = guitars
// guitars = mixedData //This not work beacuse mixed data can contains number string boolean while guitar contain number and string only

//Create Empty Array
// let myTuple:[string,number,boolean] = ['Anurag',22,true]

// let mixed = ['John',42,false] 

// mixed = myTuple //This is correct but visa versa is not true
// myTuple = mixed // beacause mixed has possiblilty that it has less than three element

// myTuple[0] = false //This is also not correct because at zero postion we store string only


///////////////// Objects

// let MyObj:object;
// MyObj = []  //This is correct because array is an Object
// MyObj = {}  //This is also true

// const exampleObj = {
//   prop1:'Anurag',
//   prop2:true
// }
// exampleObj['prop1'] = 42 //This is not work because object is also work like Tuple


// let obj:Object = {

// }

// let obj1:Object = []

// let obj = {
//   name:"Anurag"
// }
// obj['name'] = 45

// interface Guitarist1{
//   name:string,
//   active:boolean,  //Question symbol is used to make any property Optional
//   albums:(string|number)[]
// }



// let JP ={
//   name:"Jimmy",
//   active:true,
//   albums:['I','II','IV']
// }

// evh = JP  //Both are equal until I don't remove any property
// evh.years //we can't add any property also
// If apply question mark than maybe both are Equal after removal of question mark property

// const greetGuitarist = (guitarist:Guitarist)=>{
//   if (!guitarist['name']) {
//     return `The Name is Not Defined`
//   }
//   return `Hello ${guitarist['name'].toUpperCase()}` 
// }

// const Greeting = greetGuitarist(JP)
// console.log(Greeting);

//Rest Parameters

// const total = (...nums:number[]):number => {
//   return nums.reduce((prev,current)=>prev+current,0)  //Here 0 is initial value of accumulator or sum
// }
// logMsg(total(1,2,3,4,5))

// const total1 = (a:number,b:number,...nums:number[]):number => {   //nums array contain all value except first two
//   return nums.reduce((prev,current)=>prev+current,0)  //Here 0 is initial value of accumulator or sum
// }
// logMsg(total1(1,2,3,4,5))

// //Never Type 
// const createError = (errMsg:string):never=>{
//   throw new Error(errMsg)
// }

//Type Aliases
// type stringNumber = string | number
// type stringNumberArray = (string | number)[]

// type Guitarist = {
//   name?:string,
//   active:boolean,
//   albums:stringNumberArray
// }

// type UserID = stringNumber

// //Type Aliases is not applicable on interface

// ///////////////////////////////Literal Types///////////////////////////////
// let Myname:'Dave' //Now we can't change the name
// Myname = "John" //Not applicable

// let name1: 'Anurag' | 'Aniket' | 'Aditya' //No  oter name will be accepted in name1 variable
// let name1 = 'Anurag'


// const total = (a:number,b:number,...c:number[])=>{
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   return; 
// }

// const ans = total(1,2,3,4,5)
// console.log(ans);


// interface IName{
//   name:string
// }

// type IName1 = {
//   name:string
// }

//Enums

// enum (short for enumeration) is a special TypeScript feature that lets you define a set of named constants.
// It’s useful when you have a fixed group of related values — like days of the week, roles, states, etc.


// Why use enums
// Gives meaningful names to numeric or string constants.
// Improves readability and type safety.

// enum Direction {
//   Up,    // 0
//   Down,  // 1
//   Left,  // 2
//   Right  // 3
// }

// let move: Direction = Direction.Up;  
// console.log(move); // 0

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }

// console.log(Direction[1]); // "Up"

// enum Grade {
//   U=54,D,C,B,A  //We can start with any value
// }
// console.log(Grade['U']);
// console.log(Grade['B']);
// console.log(Grade['A']);


// Question 1 – Working with Arrays and Tuples
// Create:
// An array students that contains strings only.
// A tuple studentInfo that contains [string, number, boolean].
// Add a few elements to the array and tuple, then print them.
// Also try to assign the tuple to another variable of a compatible type and explain why it works or not.

// Q2 Define a type called Movie and an interface called Song.
// Movie should have title:string, released:number, and genres:string[].
// Song should have name:string, optional artist?:string, and duration:number.
// Create objects from each and write a function to print their details.

// Q3Create an enum Days with values (Sunday=1, Monday, Tuesday, …).
// Write a function getDayMessage(day:Days) which prints a custom message based on the day.
// Call this function for different enum values.

// enum Days{
//   Sunday,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday
// }


// function getDayMessage(day:Days){
//   if (day === Days.Sunday || day === Days.Saturday) {
//     console.log("It Weekend");
//   }else{
//     console.log("Its Working Day");
//   }
// }

// getDayMessage(Days.Sunday)
// getDayMessage(Days.Monday)

// Q4 Create a function logArtist which accepts either a Guitarist type (from your code) or a Singer interface:
// interface Singer {
//   name: string;
//   songs: (string|number)[];
// }
// Inside the function, print the name in uppercase and the total number of songs/albums.

// type stringNumberArray = (string | number)[]

// type Guitarist = {
//   name?:string,
//   active:boolean,
//   albums:stringNumberArray
// }
// interface Singer {
//   name: string;
//   songs: (string|number)[];
// }

// const obj1:Guitarist = {
//   name:"Anurag",
//   active:true,
//   albums:["5160",7854]
// }

// const obj2:Singer = {
//   name:"Anurag",
//   songs:["ABC"]
// }

// function logArtist(obj:Guitarist | Singer){
//   console.log(`The Name is ${obj.name?.toUpperCase()}`);
//   if ("albums" in obj) {
//     console.log(obj.albums);
//   }

//   if ("songs" in obj) {
//     console.log(obj.songs);
//   }
// }

// logArtist(obj2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  let x:number = 1
//  console.log(x);

//  x = "string" //Not assignable
//  console.log(x);
 

// let x:number|string = "anurag"
// console.log(x);
// x = 21
// console.log(x);

 //npx tsc -b to compile

//  function Greet(name?:string):string {
//   if (typeof name === 'undefined') {
//     return `Name is Not Defined`
//   }

//   return `Hello ${name}`
//  }

//  console.log(Greet("Anurag"));
//  console.log(Greet());


type mathFunction = (a:number,b:number)=>number
const sum:mathFunction = (a,b)=> a+b

//  type mathFunction = (a:number,b:number)=>number

//  let sum:mathFunction = (a,b)=>{
//   return a+b
//  }

//  console.log(sum(45,45));

//  const Voting = (age:number|string):boolean => {
//   if (Number(age) >= 18) {
//     return true
//   }else{
//     return false
//   }
//  }

//  console.log(Voting("24"));
//  console.log(Voting(12));

// function delayedCall(fn:()=>void) {
//   setTimeout(fn,1000)
// }

// delayedCall(function(){
//   console.log(`Hello There`);
// })

// function delayedCall(fn:()=>void){
//   setTimeout(fn,2*1000)
// }

// delayedCall(greet)

// function greet(){
//   console.log("hello There");
// }

// type User = {
//   firstname:string,
//   lastname:string,
//   age:number
// }

// interface User{
//   firstname:string,
//   lastname:string,
//   age:number
// }

// const u1:User = {
//   firstname:"Anurag",
//   lastname:"Raj",
//   age:21
// } 

// interface User1 {
//   firstname:string,
//   lastname:string,
//   age:number
// } 

// //Inteface is used to make structure of an Object
// //Type is also use to make Union Type example  type StringandNumber = string|number
// let AJ:User = {
//   firstname: "Anurag",
//   lastname: "Raj",
//   age: 21
// }

// let AR:User1 = {
//   firstname: "Anurag",
//   lastname: "Raj",
//   age: 21
// }

// console.log(AJ['firstname']);
// console.log(AR['lastname']);


// ///Union Implementation

// interface Manager {
//   name:string,
//   age:number
// }

// interface Employee {
//   name:string,
//   age:number,
//   department:string
// }

// type TeamLead = Manager & Employee


// interface Manager{
//   name:string,
//   age:number
// }
// interface Employee{
//   name:string,
//   age:number,
//   department:string
// }

// type TeamLead = Manager & Employee

// const TL:TeamLead = {
//   name:"Anurag",
//   age:21,
//   department:"AI/ML"
// }

// let t:TeamLead = {
//   name:"Anurag",
//   age:21,
//   department:"Software"
// }

// console.log(t);

// interface Person {
//   name:string,
//   age:number,
//   // greet:()=>string  //Both will be fine
//   greet():string 
// }                                                                                                                                                                                                                                       


// let User:Person = {
//   name:"Anurag",
//   age:21,
//   greet:()=>{
//     return `Hello ${User.name}`
//   }
// }

// console.log(User.greet());

// interface Greet{
//   name:string,
//   age:number,
//   greet:()=>void
// }

// const obj:Greet = {
//   name:"Anurag",
//   age:21,
//   greet:function(){
//     console.log("hello");
//   }

// }

// obj.greet()

// class Manager implements Person {
//   name: string;
//   age: number;
//   constructor(name:string,age:number){
//     this.name = name
//     this.age = age
//   }
//   greet = ():string=>{
//     return `Hello ${this.name}`
//   }
// }

// interface Greet{
//   name:string,
//   age:number,
//   greet:()=>void
// }

// class Manager implements Greet{
//   constructor(public name:string,public age:number){
//     this.name = name
//     this.age = age
//   }
//   greet(){
//     console.log("hello There");
//   }
// }
// class God extends Manager{
//   constructor(name:string,age:number,public role:string){
//     super(name,age)
//     this.role = role
//   }
//   greet(){
//       console.log("hello There");
//   }
//   roleing(){
//     console.log("I am Something");
    
//   }
// }


// let AJ = new Manager('John',21)
// console.log(AJ.greet());

// class God extends Manager{
//   role:string
//   constructor(name:string,age:number,role:string){
//     super(name,age)
//     this.role = role
//   }
//   greet = () =>{
//     return `Hello ${this.name}`
//   };

//   work = ():string=>{
//     return `${this.name} is the ${this.role} of the World`
//   }
// }

// let Vishnu = new God('Vishnu',Infinity,'Creator')
// console.log(Vishnu.work());

// //Blueprint of Class Using abstarct class
// //We can implement Another function which is not been possible in Interface
// abstract class Someone {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   abstract greet: () => string;

//   hello = () => {
//     return `Hello Buddy`;
//   };
// }

// interface IName{
//   name:string,
//   age:number,
//   greet:()=>void
// }

// abstract class Someone{
//   constructor(public name:string){
//     this.name = name
//   }
//   abstract greet:()=>void
//   hello = ()=>{
//     console.log(`Hello Function`);
//   }
// }

// class Employee extends Someone{
//   constructor(name: string) {
//     super(name); // must call super() in derived class
//   }

//   greet = () => {
//     return `Hello Mate`;
//   };
// }



// let Emp1 = new Employee('Alex');
// console.log(Emp1.greet());      // "Hello Mate"
// console.log(Emp1.hello());      // "Hello Buddy" 

// // An Abstract class has default implementation as well but interface don't have
// // Type do union and intersection but interface don't  string | number  or Employee & Boss

// type Employee =  {
//  name:string,
//  startDate:string
// }

// type Manager = {
//   type:string
// }

// type TeamLead = Employee & Manager

// let User:TeamLead = {
//   name:"Anurag",
//   startDate: Date().toLocaleString(),
//   type:"Engineer"
// }

// console.log(User);

// interface User {
//   name:string,
//   role:string,
//   age:number
// }


// const Anurag:User = {
//   name:"Anurag",
//   role:"Developer",
//   age:21
// }

// const Aniket:User = {
//   name:"Aniket",
//   role:"Developer",
//   age:17
// }

// function Filter(user:User[]) {
//   let ans = user.filter((u)=>(u.age < 18))
//   return ans
// }

// console.log(Filter([Anurag,Aniket]));

// type is a set of value 
// Consider type  Rect = {
//   x:number,
//   y:number
// }
// So rect don't have this x and y rect have {x:0,y:0},{x:1,y:1} and so on....
//Now consider type User = {
//   name:string
// }
// user type is also a set of value like {name:"Anurag",name:"Aniket"}
//So when we take take intersection of both user & rect why we get get both type property rather than empty or null
//Because rect is set of value so somewhere it contains this structure also {x:0,y:0,name:"Anurag"} and so on
// and same for name type also that why we get intersection of both as all the property which will present inside both

//Extending types in intreface or interface in interface
// interface X {
//   name:string
// }

// type A = {lastname:string}

// //Extending interface
// interface Y extends X{
//   firstname:string
// }

// //Extending types and interface
// interface Z extends A,Y{
//   age:number
// }

// //Extending only types
// interface M extends A{
//   age:number
// }

//Sum of age
// interface User{
//   name:string,age:number
// }

// function addTheAge(user1:User,user2:User){
//   return user1.age+user2.age
// }

// let sum = addTheAge({name:"Anuarg",age:21},{name:"Aniket",age:20})

// console.log(`The Total age is ${sum}`);

/*
Q1
Voting System Upgrade (Union + Type Narrowing)
एक फ़ंक्शन checkEligibility बनाइए जो age को number | string दोनों रूप में ले।
अगर age ≥ 21 है तो "Can Vote and Drive" return करे।
अगर age ≥ 18 है तो "Can Vote but not Drive" return करे।
अगर age < 18 है तो "Cannot Vote" return करे।
Hint: Number(age) और Type Narrowing का इस्तेमाल करें।

Q2
Interface + Inheritance (Company Hierarchy)
एक Person interface बनाइए जिसमें name, age, और introduce() method हो।
एक Employee class बनाइए जो Person implement करे। उसमें department property भी जोड़िए।
एक Manager class बनाइए जो Employee से extend हो और उसमें teamSize property हो और नया method teamReport() return करे – "Manager <name> has <teamSize> employees".
फिर इन classes का object बनाइए और methods call कीजिए।

Q3
Abstract Class + Implementation
एक abstract class Shape बनाइए जिसमें:
एक abstract method area(): number हो।
एक non-abstract method describe() हो जो "This is a shape" return करे।
फिर Rectangle class बनाइए जो Shape extend करे और area calculate करे।
फिर Circle class भी बनाइए।
Objects बनाकर area() और describe() दोनों call कीजिए।

Q4
दो type बनाइए BasicUser और AdminUser।
BasicUser में name और email हो।
AdminUser में role और permissions array हो।
SuperUser type बनाइए जो दोनों का intersection हो।
SuperUser की array बनाकर एक function लिखिए जो सिर्फ उन superusers को filter करे जिनके पास "delete" permission हो।

Q5
एक generic function mergeObjects<T, U>(obj1:T,obj2:U) लिखिए जो दो objects को merge करके return करे।
फिर इसका इस्तेमाल दो अलग interface के objects (जैसे User और Address) merge करने के लिए कीजिए।
Example result: {name:"Anurag",age:21,city:"Delhi",pincode:110001}
*/
