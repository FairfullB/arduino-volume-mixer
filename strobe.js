const { Board, Sensor } = require("johnny-five");

const board = new Board({
  port: "COM3"
});

board.on("ready", () => {  
  setupSensor("A3")
  const potentiometer = new Sensor("A3");

  potentiometer.on("change", () => {
    const {value, raw} = potentiometer;
    console.log("Sensor: ");
    console.log("  value  : ", value);
    console.log("  raw    : ", raw);
    console.log("-----------------");
  });
});