
const user = {
    name: "Niamul",
    logName(){
        console.log(`Hi, ${this.name}`)
    }
}


const user2={
    name : "Nodi",
}

const fun = user.logName;
const newFun = fun.bind(user)
// newFun();


const person = {
  name: "Niamul",
  sayHi: function() {
    console.log("Hi, " + this.name);
  }
};

const greet = person.sayHi();
// greet()




const car = {
  brand: "Toyota",
  show() {
    console.log(`Brand: ${this.brand}`);
  }
};

const showCar = car.show;
const nFun2 = showCar.bind(car)
nFun2();



function sayCountry(country) {
  console.log(`${this.name} is from ${country}`);
}

const user3 = { name: "Niamul" };

sayCountry.call(user3, "Bangladesh")

// TODO: Use call() to make it print: "Niamul is from Bangladesh"



function introduce(lang, country) {
  console.log(`${this.name} speaks ${lang} from ${country}`);
}

const user4 = { name: "Nodi" };

introduce.apply(user4,["English","Canada"])
// TODO: Use apply() to print: "Nodi speaks English from Canada"



const numbers = [1, 5, 2, 1, 3, 5, 1, 2, 2, 2];

// Expected Result: { '1': 3, '5': 2, '2': 4, '3': 1 }

// YOUR SOLUTION GOES HERE: Use reduce() to create the tally object.

const countMap = numbers.reduce((accumulator, number) => {
    // 1. Check if the number is already a key in the accumulator object.
    
    if (accumulator[number]) {
        // 2. If it EXISTS, increment its count by 1.
        accumulator[number] = accumulator[number] + 1;
    } else {
        // 3. If it DOES NOT EXIST (first time seeing it), set its count to 1.
        accumulator[number] = 1;
    }
    
    // 4. Always return the updated accumulator for the next iteration.
    return accumulator;
    
}, {}); // <--- We start with an empty object!

console.log(countMap);
// Output: { '1': 3, '5': 2, '2': 4, '3': 1 }


const namesWithDuplicates = [
    'Alex', 'Maria', 'John', 'Alex', 'Sarah', 'Maria', 'John'
];

// Expected Result: ['Alex', 'Maria', 'John', 'Sarah']

// YOUR SOLUTION GOES HERE: Use new Set() and the Spread Operator (...)
const uniqueNames =[... new Set(namesWithDuplicates)]

console.log(uniqueNames);