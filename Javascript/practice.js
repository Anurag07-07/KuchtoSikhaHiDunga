// Question 1 – Promise All
// Create three functions `task1()`, `task2()`, and `task3()` that each return a Promise resolving after different timeouts (1s, 2s, 3s) with strings `"Task1 done"`, `"Task2 done"`, `"Task3 done"`.
// Use `Promise.all` to run them together and log all results once all tasks finish.



// Question 2 – Async/Await + Fetch Simulation
// Create an async function `getUserData()` that simulates fetching user data from an API (use `setTimeout` for 2 seconds to return a fake user object).
// Then create another async function `showUserData()` that calls `getUserData()` using `await` and logs the user’s name.
// Handle possible errors with **try/catch**.


// let name_array = []
// function GetUserData(){
//   return new Promise(function(resolve){
//     setTimeout(async()=>{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const value = response.json()
//       resolve(value)
//     })
//   })
// }

// function ShowUsername(name_array){
//   return new Promise(function(resolve){
//     name_array.map((object)=>{
//       console.log(object.name);
//     })
//     return resolve()
//   })
// }

// async function Fetching_Data() {
//   const data = await GetUserData()
//   name_array = data
//   const showdata = await ShowUsername(name_array)
// }

// Fetching_Data()

//Question 3 – Static & Getter/Setter
// Create a class `BankAccount` with:
// * a static property `bankName = "XYZ Bank"`
// * a private balance property (use `#balance`)
// * a getter `balance` to read the balance
// * a setter `balance` to update the balance
// Create two accounts and demonstrate:
// * reading the balance
// * updating the balance
// * printing the static bank name

//Solution Question 3

// class Bank{
//   static bank_name = "XYZ Bank"
//   bank_balance;
//   constructor (balance){
//     this.bank_balance = balance
//   }
//   getter(){
//     console.log(`Your current Balance is ${this.bank_balance}`);
//   }

//   setter(new_balance){
//     this.bank_balance = new_balance
//     console.log(`New Balance is ${this.bank_balance}`);
//   }
// }

// const bank1 = new Bank("50000")
// bank1.getter()
// bank1.setter(20000)

//Question 4 – Map (Key/Value Handling)

// Create a `Map` called `inventory` where keys are item names (strings) and values are quantities (numbers):
// ```
// "apples" → 10  
// "bananas" → 5  
// "oranges" → 8  
// ```

// Write a function `updateInventory(item, qty)` that:
// * Adds the item to the `Map` if it does not exist.
// * Updates the quantity if it already exists (adds to current quantity).
//   Then display the updated `Map` after a few calls to `updateInventory()`.

let inventory = new Map()
inventory.set('apples',10)
inventory.set('bananas',5)
inventory.set('oranges',8)

function updateInventory(item,qty){
  if (inventory.has(item)) {
    let currentQty = inventory.get(item)
    inventory.set(item,qty+currentQty)
  }else{
    inventory.set(item,qty)
  }

  console.log(`The ${item} has current Quantity equals ${inventory.get(item)}`);
}

updateInventory('apples',10)


for (const [key,value] of inventory) {
  console.log(key,value);
}


// Q5 Create a box and give border as black and when we press enter the bg of body become black and box color become red
// Q6 Add Two Button Addclass removeClass  create a paragraph with id="para" now add the class "Highlight" and "Show" on  clicking addClass and remove hightlight on clicking removeclass

// function GetUserData(){
//   return new Promise(function(resolve){
//     setTimeout(async()=>{
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await response.json()
//       resolve(data)
//     },2000)
//   })
// }

// function ShowUserData(data){
//   data.map((object)=>{
//     console.log(object.name);
//   })
// }


// async function Data(){
//   const data = await GetUserData()
//   const second_function = await ShowUserData(data)
// }

// Data()

