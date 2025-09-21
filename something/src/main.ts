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

interface Guitarist1{
  name:string,
  active:boolean,  //Question symbol is used to make any property Optional
  albums:(string|number)[]
}



let JP ={
  name:"Jimmy",
  active:true,
  albums:['I','II','IV']
}

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
