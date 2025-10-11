const arr = [10, 5, 20, 15];
const reduce = arr.reduce((prev,curr)=> {
    let sum = 0;
    return sum+= prev + curr;
},0)
console.log(reduce);