const Animal = require("./animal");

class Lion extends Animal {
  constructor() {
    super("roar");
  }
}

module.exports = Lion;
