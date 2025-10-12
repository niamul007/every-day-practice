const items = [{id: 1, count: 5}, {id: 2, count: 10}, {id: 1, count: 3}];
//use reduce to count all the count item sum 
const total = items.reduce((prev,curr)=> {
    return prev+ curr.count;
},0)
console.log(total);

//another practice