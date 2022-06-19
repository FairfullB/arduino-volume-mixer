const { Sensor } = require("johnny-five");

class Potentiometer {
  constructor(sensorName, onChange) {
    this.sensorName = sensorName;
    this.sensor = new Sensor(sensorName);
    this.sensorValue = 0;
    this.onChange = onChange;

    this.setupListener();
  }

  setupListener() {
    this.sensor.on("change", () => {
      this.onChange(this)
    });
  }

  get value() {
    return this.sensor.value;
  }
}

module.exports = Potentiometer;