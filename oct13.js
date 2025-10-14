const names = ['Tom', 'Alice', 'Tom', 'Bob', 'Alice'];
// const duplicates = new Set(names);
// const newNames = [...duplicates]
// newNames.filter((item)=> console.log(item))

const seen = new Set();
const duplicates =  new Set()

names.filter(name=>{
    if(seen.has(name)){
        duplicates.add(name);
    }else{
        seen.add(name);
    }
})
const final = [...duplicates]
console.log(final)


// const original = { a: 1, b: { c: 2 } };
// let shalowCopy = {...original};
// shalowCopy.b.c = 5;
// console.log(shalowCopy.b.c);
// console.log(original.b.c);



//last practice 
// 1. Create a new Map object.
// 2. Use the .set() method to add two entries:
//    - Key: 1, Value: 'Alex'
//    - Key: 2, Value: 'Bob'
// 3. Use the .forEach() method on the Map to iterate and log the output.

// ... your code here ...

const map = new Map();
map.set(1,  'Alex');
map.set(2,"Bob");
// map always give back the primary data first which is the value so (value ,key ) not the key value bcz first peram always give the primary data which is the value 
map.forEach((value ,key)=>{
    console.log(`${key} : ${value}`);
});



