const { Sensor } = require("johnny-five");

class Potentiometer {
  constructor(sensorName) {
    this.sensorName = sensorName;
    this.sensor = new Sensor(sensorName);
    this.sensorValue = 0;
    this.sensorValueNormalised = 0;

    this.setupListener()
  }

  setupListener() {
    this.sensor.on("change", () => {
      const { value } = this.sensor;
      console.log(`Sensor: ${this.sensorName}`);
      console.log("  value  : ", value);
      console.log("-----------------");
    });
  }
}

exports.Potentiometer = Potentiometer;