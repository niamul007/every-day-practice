
const user ={
    name : "Niamul",
    logName(){
        console.log(`Hi ${this.name}`);
    },
}
const boundLogname = user.logName
const bound = boundLogname.bind(user)
bound()