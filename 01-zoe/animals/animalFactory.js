const Lion = require("./lion");
const Tiger = require("./tiger");

class AnimalFactory {
  createAnimal(type) {
    switch (type) {
      case "lion":
        return new Lion();
      case "tiger":
        return new Tiger();
      default:
        throw new Error("Invalid animal type");
    }
  }
}

module.exports = AnimalFactory;
