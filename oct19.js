
const user ={
    name : "Niamul",
    logName(){
        console.log(`Hi ${this.name}`);
    },
}
const boundLogname = user.logName
const bound = boundLogname.bind(user)
bound();


const user1 = {
    name: "Nadia",
    logName() {
        // 💡 Make sure to use 'this.name'
        console.log(`Hi ${this.name}, thanks for having us`);
    },
};

// 1. Get the unbound function reference
const unboundLogName1 = user.logName;

// 2. Create the bound function
const boundLogName = unboundLogName1.bind(user1)

// 3. Call the bound function
boundLogName();


const user2 = {
    name: "Nadiam",
    logName() {
        console.log(`Hi ${this.name}`);
    },
};

const guestUser = {
    name: "Guest"
};

// 1. Use .call() to call user1.logName immediately, setting 'this' to guestUser
user2.logName.call(guestUser)
// 2. Use .apply() to call user1.logName immediately, setting 'this' to guestUser
user1.logName.apply(user);