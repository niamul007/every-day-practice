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




// This simulates the result you got from Promise.allSettled()
const results = [
    { status: 'fulfilled', value: 'P1 success' },
    { status: 'fulfilled', value: 'P2 success' },
    { status: 'rejected', reason: 'P3 failure' }
];

// 1. Filter the results array to keep only objects where status is 'rejected'.
// 2. Map the filtered array to return only the 'reason' property.
const failedReasons = results.filter(item=> item.status === "rejected").map(item => item.reason);

console.log(failedReasons); // Expected: ['P3 failure']


//module practice 

// Import the exported items
import { greeting, calculate } from './oct16.js';

console.log(greeting); // Output: Hello
console.log(calculate(5, 3)); // Output: 8