const { Board } = require("johnny-five");
const { VolumeDial } = require("./volume-dial")

const board = new Board({
  port: "COM3"
});

function onVolumneChange(dial) {
  console.log(`Sensor: ${dial.sensorName}`);
  console.log("  value  : ", dial.normalisedValue);
  console.log("-----------------");
}

board.on("ready", () => {  
  new VolumeDial("A0", onVolumneChange);
  new VolumeDial("A1", onVolumneChange);
  new VolumeDial("A2", onVolumneChange);
  new VolumeDial("A3", onVolumneChange);
});