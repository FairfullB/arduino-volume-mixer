const { Board } = require("johnny-five");
const VolumeController = require("./volume-controller")

const board = new Board({
  port: "COM3"
});

board.on("ready", () => {  
  new VolumeController("A0", "spotify");
  new VolumeController("A1", "discord");
  new VolumeController("A2", "rl");
  new VolumeController("A3", "dota");
});