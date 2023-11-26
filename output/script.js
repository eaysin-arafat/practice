import { Player } from "./classes/Player.js";
const masrafi = new Player("Masrafi", 40, "Bangladesh");
let sakib;
sakib = new Player("Sakib", 38, "Bangladesh");
console.log(sakib.country);
const players = [];
players.push(sakib);
players.push(masrafi);
console.log(players);
function drawRactangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRactangle({ width: 50, length: 20 });
