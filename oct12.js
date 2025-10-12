const items = [{id: 1, count: 5}, {id: 2, count: 10}, {id: 1, count: 3}];
//use reduce to count all the count item sum 
const total = items.reduce((prev,curr)=> {
    return prev+ curr.count;
},0)
console.log(total);

//another practice

const arr = [1, 2, 3];
const obj = arr.reduce((prev,curr)=>{
    prev[curr] = curr;
    return prev;
},{})

console.log(obj);


// find unique number from an arry 
const duplicates = [5, 2, 8, 2, 5, 10];

const newArr = new Set(duplicates);
const uniqueArr = Array.from(newArr);
console.log(uniqueArr)