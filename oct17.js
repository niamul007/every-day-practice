class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        // Base behavior (used by the Animal instance)
        console.log(`${this.name} sounds like a generic animal.`); 
    }
}

class Dog extends Animal{
    constructor(name){
        // Calls the Animal constructor to set this.name
        super(name); 
    }
    speak(){
        // Overridden behavior (specialized for Dog)
        console.log(`${this.name} says Woof! Woof!`);
    }
}

const dog = new Dog("Jacky");
const oldDog = new Animal("Bob")

dog.speak();    // Output: Jacky says Woof! Woof! (Dog's method)
oldDog.speak(); // Output: Bob sounds like a generic animal. (Animal's method)