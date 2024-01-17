class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  speak(message) {
    const words = message.split(" ");
    return words.join(` ${this.sound} `) + ` ${this.sound}`;
  }
}

module.exports = Animal;
