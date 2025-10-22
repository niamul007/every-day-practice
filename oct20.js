
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

const obj = numbers.reduce((acc,num)=>{
  if(acc[num]){
    acc[num] = acc[num] + 1;
  }else{
    acc[num] = 1;
  }
  return acc;
},{})

console.log(obj);


const namesWithDuplicates = [
    'Alex', 'Maria', 'John', 'Alex', 'Sarah', 'Maria', 'John'
];

// Expected Result: ['Alex', 'Maria', 'John', 'Sarah']

// YOUR SOLUTION GOES HERE: Use new Set() and the Spread Operator (...)
const uniqueNames =[... new Set(namesWithDuplicates)]

console.log(uniqueNames);


const car1 = {
    make: 'Honda',
    model: 'Civic',
    mileage: 50000, 
    color: 'Red'
};

const {mileage ,...filterData} = car1;
console.log(filterData)



const person1 = {
    name: 'Sarah',
    age: 25,
    hobbies: ['reading', 'coding']
};


Object.freeze(person1)
person1.age = 34;
person1.ocopation = 'engineer'
console.log(person1)


