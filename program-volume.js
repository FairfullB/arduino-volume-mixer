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
    this.programs = this.findProgram(programKey);
  }

  findProgram(programKey) {
    const processName = Programs[programKey];

    if (!processName) {
      throw Error(`Program key has no matching entry: ${processName}`);
    }

    return Mixer
      .getAudioSessionProcesses()
      .filter(s => s.name === processName) 
  }

  setVolume(level) {
    console.log(`Setting ${this.key} to ${level}`);
    this.programs.forEach(p => this.setProgramLevel(p, level))
  }

  setProgramLevel(program, level) {
    const normalisedLevel = Math.min(level, 1);
    Mixer.setAudioSessionVolumeLevelScalar(program.pid, normalisedLevel);
  }
}

exports.ProgramVolume = ProgramVolume