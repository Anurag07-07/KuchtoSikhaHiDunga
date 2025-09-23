"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello");
const obj1 = {
    name: "Anurag",
    active: true,
    albums: ["5160", 7854]
};
const obj2 = {
    name: "Anurag",
    songs: ["ABC"]
};
function logArtist(obj) {
    console.log(`The Name is ${obj.name?.toUpperCase()}`);
    if ("albums" in obj) {
        console.log(obj.albums);
    }
    if ("songs" in obj) {
        console.log(obj.songs);
    }
}
logArtist(obj2);
//# sourceMappingURL=main.js.map