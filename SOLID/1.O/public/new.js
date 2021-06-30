"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Zoo_1 = require("./Zoo");
const Cat_1 = require("./Cat");
const Dog_1 = require("./Dog");
const Parrot_1 = require("./Parrot");
const Cow_1 = require("./Cow");
let zoo = new Zoo_1.Zoo;
zoo.addAnimal(new Cat_1.Cat);
zoo.addAnimal(new Dog_1.Dog);
zoo.addAnimal(new Parrot_1.Parrot);
zoo.addAnimal(new Cow_1.Cow);
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});
