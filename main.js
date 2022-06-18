const { Board } = require("johnny-five");
const { Potentiometer } = require("./potentiometer")
const { VolumeDial } = require("./volume-dial")

const board = new Board({
  port: "COM3"
});

function onVolumneChange(dial) {
  console.log(`Sensor: ${dial.sensorName}`);
  console.log("  value  : ", dial.potLevel);
  console.log("-----------------");
}

board.on("ready", () => {  
  new VolumeDial("A0", onVolumneChange)
});