// first practice 
// const arr = [10, 5, 20, 15];
// const reduce = arr.reduce((prev,curr)=> {
//     let sum = 0;
//     return sum+= prev + curr;
// },0)
// console.log(reduce);



// 2nd practice 

// const niamul = {
//     name: "Niamul",
//     age : 24,
//     weight: "74.5 kg",
//     height: "5.8 ft"
// }

// function countProperties(obj){
//     return Object.keys(obj);
// }
// console.log(countProperties(niamul));

//third one 
// const reduceArr = [['name', 'Alex'], ['age', 30]];
// const trying = reduceArr.reduce((prev,curr)=>{
//     let newObj = `${prev},${curr}`;
//     return {newObj};
// })
// console.log(trying);


// first practice clean way to solve 
const arr = [10, 5, 20, 15];
const totalSum = arr.reduce((sum,acc)=>{
    return sum + acc;
},0);
console.log(totalSum);


//there was mistake on 2nd one i mean i missed a step i must show the number 
const niamul = {
    name: "Niamul",
    age : 24,
    weight: "74.5 kg",
    height: "5.8 ft"
}

function countProperties(obj){
    return Object.keys(obj).length;;
}
console.log(countProperties(niamul));

//3rd one was a bit tricky so do it again 
const reduceArr = [['name', 'Alex'], ['age', 30]];
const finalObject = reduceArr.reduce((prev,currObj)=>{
    const [key,value] = currObj;
    prev[key] = value;
    return prev;
},{})

console.log(finalObject);


const arr1 = [{id: 1, count: 5}, {id: 2, count: 10}, {id: 1, count: 3}];
const total = arr1.reduce((prev,curr)=>{
    return prev + curr.count;
},0)
console.log(total);