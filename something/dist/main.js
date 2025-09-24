"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello");
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hello There");
    }
}
const man1 = new Manager("Anurag", 21);
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
// function addTheAge(user1:User,user2:User){
//    return user1.age+user2.age
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
//# sourceMappingURL=main.js.map