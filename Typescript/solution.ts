// Q1 Array and Tuple 
// let students: string[] = ["Anurag", "Raj", "Ravi"];
// students.push("Sohan");
// // students.push(123) // Error: number not assignable to string
// console.log(students);

// let studentInfo: [string, number, boolean] = ["Anurag", 22, true];
// // studentInfo[0] = false // Error: must be string at index 0

// let anotherTuple: [string, number, boolean];
// anotherTuple = studentInfo; // Works: structure matches

// console.log(studentInfo);
// console.log(anotherTuple);


// Q2 Movie and Songs
// type Movie = {
//   title: string;
//   released: number;
//   genres: string[];
// };

// interface Song {
//   name: string;
//   artist?: string; // optional
//   duration: number;
// }

// const myMovie: Movie = {
//   title: "Inception",
//   released: 2010,
//   genres: ["Sci-Fi", "Thriller"],
// };

// const mySong: Song = {
//   name: "Numb",
//   duration: 3.2,
// };

// function printMovie(movie: Movie) {
//   console.log(`Movie: ${movie.title} (${movie.released})`);
// }

// function printSong(song: Song) {
//   console.log(
//     `Song: ${song.name} ${
//       song.artist ? `by ${song.artist}` : "(Artist unknown)"
//     } Duration: ${song.duration}`
//   );
// }

// printMovie(myMovie);
// printSong(mySong);

// Q3 Enum 
// enum Days {
//   Sunday = 1,
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
// }

// function getDayMessage(day: Days){
//   if (day === Days.Sunday || day === Days.Saturday){
//     console.log("Weekend! Time to relax.");
//   } else {
//     console.log("Weekday! Time to work.");
//   }
// }

// getDayMessage(Days.Sunday); // Weekend! Time to relax.
// getDayMessage(Days.Monday); // Weekday! Time to work.

// Q4 Guitarist 
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

// interface Singer {
//   name: string;
//   songs: (string | number)[];
// }

// const guitarist: Guitarist = {
//   name: "Jimmy",
//   active: true,
//   albums: ["I", "II", "III"],
// };

// const singer: Singer = {
//   name: "Taylor",
//   songs: ["Song1", "Song2", 2022],
// };

// function logArtist(artist: Guitarist | Singer) {
//   console.log(`Artist Name: ${artist.name.toUpperCase()}`);
//   // Narrowing
//   if ("albums" in artist) {
//     console.log(`Total Albums: ${artist.albums.length}`);
//   } else if ("songs" in artist) {
//     console.log(`Total Songs: ${artist.songs.length}`);
//   }
// }

// logArtist(guitarist);
// logArtist(singer);


// Q1
// const checkEligibility = (age: number | string): string => {
//   const numAge = Number(age);

//   if (numAge >= 21) {
//     return "Can Vote and Drive";
//   } else if (numAge >= 18) {
//     return "Can Vote but not Drive";
//   } else {
//     return "Cannot Vote";
//   }
// };

// console.log(checkEligibility(22));   // Can Vote and Drive
// console.log(checkEligibility("19")); // Can Vote but not Drive
// console.log(checkEligibility(15));   // Cannot Vote


// Q2
// interface Person {
//   name: string;
//   age: number;
//   introduce(): string;
// }

// class Employee implements Person {
//   name: string;
//   age: number;
//   department: string;

//   constructor(name: string, age: number, department: string) {
//     this.name = name;
//     this.age = age;
//     this.department = department;
//   }

//   introduce(): string {
//     return `Hi, I'm ${this.name}, working in ${this.department} department`;
//   }
// }

// class Manager extends Employee {
//   teamSize: number;

//   constructor(name: string, age: number, department: string, teamSize: number) {
//     super(name, age, department);
//     this.teamSize = teamSize;
//   }

//   teamReport(): string {
//     return `Manager ${this.name} has ${this.teamSize} employees`;
//   }
// }

// const emp1 = new Employee("Anurag", 21, "Software");
// console.log(emp1.introduce());

// const mgr1 = new Manager("John", 35, "IT", 10);
// console.log(mgr1.introduce());
// console.log(mgr1.teamReport());


// abstract class Shape {
//   abstract area(): number;

//   describe(): string {
//     return "This is a shape";
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area(): number {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   radius: number;

//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// const rect = new Rectangle(10, 20);
// console.log(rect.describe());      // "This is a shape"
// console.log("Rectangle Area:", rect.area());

// const circle = new Circle(7);
// console.log(circle.describe());    // "This is a shape"
// console.log("Circle Area:", circle.area());


// type BasicUser = {
//   name: string;
//   email: string;
// };

// type AdminUser = {
//   role: string;
//   permissions: string[];
// };

// type SuperUser = BasicUser & AdminUser;

// const superUsers: SuperUser[] = [
//   { name: "Anurag", email: "anurag@test.com", role: "admin", permissions: ["read", "write", "delete"] },
//   { name: "Aniket", email: "aniket@test.com", role: "admin", permissions: ["read", "write"] },
//   { name: "Ravi", email: "ravi@test.com", role: "superadmin", permissions: ["delete", "write"] },
// ];

// function filterDeleteUsers(users: SuperUser[]): SuperUser[] {
//   return users.filter(u => u.permissions.includes("delete"));
// }

// console.log(filterDeleteUsers(superUsers));


// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// interface User {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   pincode: number;
// }

// const user: User = { name: "Anurag", age: 21 };
// const address: Address = { city: "Delhi", pincode: 110001 };

// const merged = mergeObjects(user, address);
// console.log(merged); // {name:"Anurag", age:21, city:"Delhi", pincode:110001}
