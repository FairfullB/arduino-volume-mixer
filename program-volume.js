const { NodeAudioVolumeMixer: Mixer } = require("node-audio-volume-mixer");

const Programs = {
  spotify: "Spotify.exe",
  discord: "Discord.exe",
  dota: "dota2.exe",
  rl: "RocketLeague.exe"
};

class ProgramVolume {
  constructor(programKey) {
    this.key = programKey;
    this.programs = this.findProgram();
  }

  findProgram() {
    const processName = Programs[this.key];

    if (!processName) {
      throw Error(`Program key has no matching entry: ${this.key}`);
    }

    return Mixer
      .getAudioSessionProcesses()
      .filter(s => s.name === processName) 
  }

  setVolume(level) {
    console.log(`Setting ${this.key} to ${level}`);

    // attempt to find the process again if process wasn't when this call initialised
    if (!this.programs.length) {
      console.log(`Attempting to re-register process: ${this.key}`)
      this.programs = this.findProgram();
    }

    if (!this.programs.length) {
      console.log(`No process registered for: ${this.key}. Skipping volume set.`);
      return;
    }

    this.programs.forEach(p => this.setProgramLevel(p, level))
  }

  setProgramLevel(program, level) {
    const normalisedLevel = Math.min(level, 1);
    Mixer.setAudioSessionVolumeLevelScalar(program.pid, normalisedLevel);
  }
}

exports.ProgramVolume = ProgramVolume