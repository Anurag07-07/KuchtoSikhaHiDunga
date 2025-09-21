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

