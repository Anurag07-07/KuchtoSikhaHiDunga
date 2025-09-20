/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Question
// You have a Person class with a name property and a method greet() that logs "Hello, my name is <name>".
// Create a Student class that inherits from Person. Add a new property grade to the Student class and a method study() that logs "<name> is studying in grade <grade>".
// Write the code to:
// Define both classes.
// Create an object of Student named student1 with name "Chitranshi" and grade 10.
// Call both greet() and study() on student1.


class Person{
  constructor(name){
    this.name = name
  }
  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person{
  constructor(name,grade){
    super(name)
    this.grade = grade
  }
  Study(){
    console.log(`${this.name} ${this.grade}`);
  }
}

const student1 = new Student('Anurag',10)
student1.greet()
student1.Study()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////