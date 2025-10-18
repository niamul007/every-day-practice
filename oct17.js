
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

// import { greeting, calculate } from './oct16.js';

// console.log(greeting); // Output: Hello
// console.log(calculate(5, 3)); // Output: 8


const promise = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Hi there i am having good times");
    },2000)
})

promise.then(result => console.log(result)).catch(error=> console.log(error))


const user = {
    id: 1,
    name: "Alex",
    address: {
        city: "London",
        zip: 10101
    }
};

// YOUR FIX: Use two spread operators for a deep, immutable update
const updatedUser = {
    ...user, // 1. Copy all top-level properties (id, name, address reference)
    address: {
        ...user.address, // 2. Copy all properties from the old address (zip)
        city: "New York" // 3. Override ONLY the city property
    }
};

console.log(updatedUser.address.city); // Output: New York (The new object is updated)
console.log(user.address.city);        // Output: London (The original object is UNCHANGED)