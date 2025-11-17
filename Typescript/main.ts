///////////////////////////Basic/////////////////////////////////////////////

// let a:number = 12;
// console.log(a);
// let b:string = 'a'
// console.log(b);

// console.log(a/b); //It Don't work and give NaN because number can't be divided with string

// Typescript is Strongly Typed Language
// let myName:string = "Anurag Raj"
// console.log(myName);
// let meaningOfLife:number = 22
// console.log(meaningOfLife);
// let album:any; //It is Used when we don't Know the Datatype
// album = 2002
// console.log(album);

///////Functions//////////

// const sum = (a:number,b:string)=>{
//   return a+b
// }
// console.log(sum(9,"AJ"));

//Union Type
// let value: string | number //It is used when we know that variable is either number or string
// let isActive:number | boolean;
// isActive = 1
// console.log(isActive);
// isActive = false
// console.log(isActive);


//Regex Type
// let reg:RegExp = /\w+/g
// console.log(reg);


/*
Assignment

Q1 Create a function printValue whose parameter is of type string | number.
If a number is passed, print "Number is X".
If a string is passed, print "String is Y".
Then call this function twice — once with a number and once with a string.


Q2 Create a variable emailReg:RegExp that validates an email (for example /^[\w.-]+@[\w.-]+\.\w+$/).
Then write a function validateEmail(email:string):boolean that returns true if the email is valid, otherwise false.
validateEmail("test@gmail.com") // true
validateEmail("abc@.com") // false


Q3 Create a variable data:any.
Then write a function checkDataType(data:any) that checks if the data is a string, number, or something else and prints it to the console.
checkDataType(123) // Output: Number
checkDataType("Anurag") // Output: String
checkDataType(true) // Output: Boolean

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// let bands:string[] = []
// bands.push('Van Halen')

//Tuple for more strictness and position strictness to

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

// In TypeScript, type and interface are both used to define the shape of objects (i.e., the structure of data), but they have some differences in syntax and capabilities.

// type Guitarist = {
//   name:string,
//   active?:boolean,  //Question symbol is used to make any property Optional
//   albums:(string|number)[]
// }

//We can also use interface also

interface Guitarist1{
  name:string,
  active:boolean,  //Question symbol is used to make any property Optional
  albums:(string|number)[]
}

let evh = {
  name:"Eddie",
  active:false,
  albums:[1984,5150,'OU812']
}

let JP ={
  name:"Jimmy",
  albums:['I','II','IV']
}

evh = JP  //Both are equal until I don't remove any property
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

// Q4 Create a function logArtist which accepts either a Guitarist type (from your code) or a Singer interface:
// interface Singer {
//   name: string;
//   songs: (string|number)[];
// }
// Inside the function, print the name in uppercase and the total number of songs/albums.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


// //Multiple return 
// function MultiReturn(anotherfn:(()=>number) | ((a:number)=>number) ) {
//   setTimeout(anotherfn,1000)
// }


// MultiReturn(function(){
//   console.log(`No Argument`);
//   return 1
// })


// type User = {
//   firstname:string,
//   lastname:string,
//   age:number
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

// class Employee extends Someone {
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

// interface Name{
//   name:string,
//   age:number
// }

// interface User extends Name{
//   firstname:string,
//   lastname:string
// }

// let U:User = {
//   name:"DSADAS",
//   age:45,
//   firstname:"Anurag",
//   lastname:"raj"
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Generics (Not needed here unless you want to generalize the function for any type)
// Define a User interface
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;     
//   password: string;  
// }

// Select only fields to be updated
// type UpdateProps = Pick<User, 'name' | 'email' | 'password'>;
// type UpdateProps = Pick<User,'name' | 'email' | 'password'>
// type UpdateBodyProps = Partial<UpdateProps>



// // Make them optional (user can provide some or all)
// type UpdatePropsOptional = Partial<UpdateProps>;

// // Function to update the user
// function updateUser(updateProps: UpdatePropsOptional) {
//   // Hit the database to update the user
//   console.log('Updating user with:', updateProps);
// }

// //Readonly use when we don't want to change the property inside object or anything 

// interface OBJ {
//   //This is Use when we have to apply readonly on one property
//   readonly name:string
//   position:string
// }

// interface IName{
//   name:string,
//   age:number
// }

// let obj:Readonly<IName> = {
//   name:"Anurag",
//   age:21
// }

// //This is use when we have to apply readonly on whole object
// let obj:Readonly<OBJ> = {
//   name:"Anurag",
//   position:"CEO"
// }

// // obj.name = "Aniket"  //Not Possible

// interface User{
//   id:number,
//   username:string
// }

// type Users = {
//   [key:string]:User
// }

// const nmae = {
//   name:"Anurag"
// }

// const users = {
//   "ras@qd1":{
//     id:1,
//     username:'Anurag'
//   },
//   "ras1dr@":{
//     id:2,
//     username:'Aniket'
//   }
// }



//Records and Maps

// interface User{
//   id:string,
//   username:string
// }

// //Syntax => type variable_name = Record<key type, value type >
// type Users = Record<string,User>

// const users:Users  = {
//   "ras@qd1":{
//     id:"ras@qd1",
//     username:'Anurag'
//   },
//   "ras1dr@":{
//     id:"ras1dr@",
//     username:'Aniket'
//   }
// }

// interface User{
//   name:string,
//   age:number
// }

// type RecordType =  Record<number,User>

// const obj:RecordType = {
//   1:{
//     name:"Anurag",
//     age:21
//   }
// }

// const map1 = new Map<number,User>()
// map1.set(1,{name:"Anurag",age:21})


//Another way to create Object

// interface User {
//   name:string,
//   age:number
// }

// // new Map <typeof key,typeof Value>
// const users = new Map<string,User>()
// //variable_name.set(keyof,value)
// users.set("ras12",{name:"Anurag",age:21})
// users.set("ras13",{name:"Aniket",age:20})

// const user = users.get('ras12')
// users.delete('ras13')

// type EventType = 'dance' | 'music' | 'something'
// type ExcludeType = Exclude<EventType,'something'>

// type EventType = 'click' | 'scroll' | 'mousemove'
// type ExcludeEvent = Exclude<EventType,'scroll'>;

// const handleEvent = (event:ExcludeEvent)=>{
//   console.log(`Handling EventType: ${event}`);
// }

// handleEvent('click')
// handleEvent('scroll') //Excluded

//Zod Inference

// import { z } from "zod";
// import express from "express";

// const app = express();
// app.use(express.json()); // Make sure to include this middleware

// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// // ✅ Derive the TypeScript type from the Zod schema
// type UpdateBody = z.infer<typeof userProfileSchema>;

// app.put("/user", (req, res) => {
//   const parsed = userProfileSchema.safeParse(req.body);

//   if (!parsed.success) {
//     res.status(411).json(parsed.error.format());
//     return;
//   }

//   // ✅ Now `updateBody` is strongly typed
//   const updateBody: UpdateBody = parsed.data;

//   // Update database here using `updateBody`
//   res.json({
//     message: "User updated",
//     data: updateBody
//   });
// });

// app.listen(3000, () => console.log("Server running on port 3000"));
