
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
