const { Potentiometer } = require('./potentiometer')

class VolumeDial {
  constructor(sensorName, onChange) {
    this.onChange = onChange;
    this.potentiometer = new Potentiometer(
      sensorName, 
      () => this.onPotentiometerChange()
    );
  }

  onPotentiometerChange() {
    this.normalisedValue = this.potLevel;
    this.onChange(this)
  }
  
  get sensorName() {
    this.potentiometer.sensorName
  }

  get potLevel() {
    return this.potentiometer.value
  }

  set normalisedValue(value) {
    this._normalisedValue = Math.floor(value / 1023 * 100) / 100;
  }

  get normalisedValue() {
    return this._normalisedValue;
  }
}

exports.VolumeDial = VolumeDial;