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



const products = [
    {name: 'A', price: 100}, 
    {name: 'B', price: 50}, 
    {name: 'C', price: 200}
];

// Write your single-line chain here:
const expensiveNames = products.filter((item) => item.price > 100).map((item)=> item.name)

console.log(expensiveNames);

const newMap = new Map();
newMap.set(true, "Yes");
console.log(newMap.get(true))



 function fetchData(id) {
    // Return a new Promise object
    return new Promise((resolve, reject) => {
        // Use setTimeout to simulate a network delay
        setTimeout(() => {
            // After 2 seconds, call the resolve function with the data
            if(id===1){
                resolve({name: "Niamul", age: "24"})
            }else{
                reject(new Error("You are incorrect buddy"))
            }

            // resolve(/* ... the data message ... */);
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

fetchData(1).then((res)=>{
    return res;
})
.then((data) => console.log(data));

// async function processData (id){
//     console.log("proceessing...")
//     try{
//         const getData = await fetchData(id);
//         console.log(`Genuin id is : ${id} and the data: ${getData}`);
//     }
//     catch (error) {
//         // 3. Catch handles the rejection/error
//         console.error(error.message); // Logs "You are incorrect buddy"
//     }
// }

// processData(3);


const user = {
    firstName: 'Alex',
    job: 'Developer'
};
const obj = Object.entries(user);
console.log(obj);
for (const [key,value] of obj) {
    console.log(`${key} : ${value}`)
}
// 1. Use Object.entries() to get an array of [key, value] pairs.
//    (Expected: [['firstName', 'Alex'], ['job', 'Developer']])

// 2. Use a for...of loop to iterate over the entries.
// 3. Use destructuring within the loop's declaration: for (const [key, value] of entries)

// ... your code here ...