// first practice 
const arr = [10, 5, 20, 15];
const reduce = arr.reduce((prev,curr)=> {
    let sum = 0;
    return sum+= prev + curr;
},0)
console.log(reduce);



// 2nd practice 

const niamul = {
    name: "Niamul",
    age : 24,
    weight: "74.5 kg",
    height: "5.8 ft"
}

function countProperties(obj){
    return Object.keys(obj);
}
console.log(countProperties(niamul));