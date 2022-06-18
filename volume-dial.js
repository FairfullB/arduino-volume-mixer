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
    this.onChange(this)
  }
  
  get sensorName() {
    this.potentiometer.sensorName
  }

  get potLevel() {
    return this.potentiometer.value
  }

  set steppedValue(value) {

  }

  get steppedValue() {
    this._steppedValue;
  }
}

exports.VolumeDial = VolumeDial;