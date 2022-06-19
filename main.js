const { Board } = require("johnny-five");
const VolumneController = require("./volume-controller")

const board = new Board({
  port: "COM3"
});

board.on("ready", () => {  
  new VolumneController("A0", "spotify");
  new VolumneController("A1", "discord");
  new VolumneController("A2", "rl");
  new VolumneController("A3", "dota");
});