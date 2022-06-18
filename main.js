const { Board } = require("johnny-five");
const { Potentiometer } = require("./potentiometer")

const board = new Board({
  port: "COM3"
});

board.on("ready", () => {  
  new Potentiometer("A0")
});