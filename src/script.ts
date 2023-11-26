import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/isPlayer.js";

const masrafi = new Player("Masrafi", 40, "Bangladesh");

let sakib: IsPlayer;
sakib = new Player("Sakib", 38, "Bangladesh");

console.log(sakib.country);

const players: IsPlayer[] = [];

players.push(sakib);
players.push(masrafi);

console.log(players);

interface RectangleOptions {
  width: number;
  length: number;
}

function drawRactangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

drawRactangle({ width: 50, length: 20 });
