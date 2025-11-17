// Q1 Solution
// Three tasks returning promises with different timeouts
// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task1 done");
//     }, 1000); // 1 second
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task2 done");
//     }, 2000); // 2 seconds
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task3 done");
//     }, 3000); // 3 seconds
//   });
// }

// // Run all tasks together using Promise.all
// Promise.all([task1(), task2(), task3()])
//   .then((results) => {
//     console.log("All tasks completed:");
//     console.log(results); // ["Task1 done", "Task2 done", "Task3 done"]
//   })
//   .catch((error) => {
//     console.error("Error in one of the tasks:", error);
//   });


// Q4 Solution
// Create a Map
// const inventory = new Map();
// inventory.set("apples", 10);
// inventory.set("bananas", 5);
// inventory.set("oranges", 8);

// // Function to update inventory
// function updateInventory(item, qty) {
//   if (inventory.has(item)) {
//     // If item already exists, add to current quantity
//     let currentQty = inventory.get(item);
//     inventory.set(item, currentQty + qty);
//   } else {
//     // If item doesn't exist, add new
//     inventory.set(item, qty);
//   }
//   console.log(`${item} updated. New quantity: ${inventory.get(item)}`);
// }

// // Usage
// updateInventory("apples", 5);    // apples → 15
// updateInventory("mangoes", 7);   // adds mangoes → 7
// updateInventory("bananas", 3);   // bananas → 8

// // Display full inventory
// console.log("Final inventory:");
// for (let [item, qty] of inventory) {
//   console.log(`${item}: ${qty}`);
// }

