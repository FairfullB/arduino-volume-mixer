const { Board } = require("johnny-five");
const { Potentiometer } = require("./potentiometer")

const board = new Board({
  port: "COM3"
});

function onPotChange(potentiometer) {
  console.log(`Sensor: ${potentiometer.sensorName}`);
  console.log("  value  : ", potentiometer.value);
  console.log("-----------------");
}

board.on("ready", () => {  
  new Potentiometer("A0", onPotChange)
});