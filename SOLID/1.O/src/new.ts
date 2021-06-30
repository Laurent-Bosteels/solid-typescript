import {Zoo} from './Zoo'
import {Cat} from './Cat'
import {Dog} from './Dog'
import {Parrot} from './Parrot'
import {Cow} from './Cow'

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Cow);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});