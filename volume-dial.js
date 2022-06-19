const Potentiometer = require('./potentiometer')

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

    // ignore noisy sensors jittering +/- 1
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
    const normalised =  Math.floor(value / 1023 * 100) / 100;
  
    // correct the dial level to left: decrease -> right: increase
    this._normalisedValue = 1 - normalised;
  }

  get normalisedValue() {
    return this._normalisedValue;
  }
}

module.exports = VolumeDial;