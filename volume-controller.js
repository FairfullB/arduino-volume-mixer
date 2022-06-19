const VolumeDial = require("./volume-dial")
const ProgramVolume = require("./program-volume")

class VolumneController {
  constructor(dial, programKey) {
    this.programVolume = new ProgramVolume(programKey)
    this.volumeDial = new VolumeDial(dial, () => this.updateVolume());

    this.updateVolume();
  }

  updateVolume() {
    this.programVolume.setVolume(this.volumeDial.normalisedValue)
  }
}

module.exports = VolumneController;