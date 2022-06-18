const { Potentiometer } = require('./potentiometer')

class VolumeDial {
  constructor(sensorName, onChange) {
    this.onChange = onChange;
    this.potentiometer = new Potentiometer(
      sensorName, 
      () => this.onPotentiometerChange()
    );

    this._potLevel = null;
  }

  onPotentiometerChange() {
    // always run on initial change
    if (this._potLevel === null) {
      this._potLevel = this.currentPotLevel;
      this.normalisedValue = this.currentPotLevel;
      this.onChange(this);
    }

    if (Math.abs(this._potLevel - this.currentPotLevel) <= 2) {
      return;
    }

    this._potLevel = this.currentPotLevel;
    this.normalisedValue = this.currentPotLevel;

    this.onChange(this);
  }
  
  get sensorName() {
    return this.potentiometer.sensorName
  }

  get currentPotLevel() {
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