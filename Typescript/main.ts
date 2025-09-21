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

// interface Guitarist1{
//   name:string,
//   active?:boolean,  //Question symbol is used to make any property Optional
//   albums:(string|number)[]
// }

// let evh:Guitarist = {
//   name:"Eddie",
//   active:false,
//   albums:[1984,5150,'OU812']
// }

// let JP:Guitarist ={
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


//Enums 
// enum Grade {
//   U=54,D,C,B,A  //We can start with any value
// }
// console.log(Grade['U']);
// console.log(Grade['B']);
// console.log(Grade['A']);


/*

Question 1 – Working with Arrays and Tuples
Create:
An array students that contains strings only.
A tuple studentInfo that contains [string, number, boolean].
Add a few elements to the array and tuple, then print them.
Also try to assign the tuple to another variable of a compatible type and explain why it works or not.

Q2 Define a type called Movie and an interface called Song.
Movie should have title:string, released:number, and genres:string[].
Song should have name:string, optional artist?:string, and duration:number.
Create objects from each and write a function to print their details.

Q3Create an enum Days with values (Sunday=1, Monday, Tuesday, …).
Write a function getDayMessage(day:Days) which prints a custom message based on the day.
Call this function for different enum values.

Q4 Create a function logArtist which accepts either a Guitarist type (from your code) or a Singer interface:
interface Singer {
  name: string;
  songs: (string|number)[];
}
Inside the function, print the name in uppercase and the total number of songs/albums.

*/