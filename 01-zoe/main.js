const AnimalFactory = require("./animals/animalFactory");

const animalFactory = new AnimalFactory();
const lion = animalFactory.createAnimal("lion");
const tiger = animalFactory.createAnimal("tiger");

// Tests
console.log(lion.speak("I'm a lion"));
console.log(tiger.speak("Lions suck"));
