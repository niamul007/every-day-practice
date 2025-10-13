const names = ['Tom', 'Alice', 'Tom', 'Bob', 'Alice'];
// const duplicates = new Set(names);
// const newNames = [...duplicates]
// newNames.filter((item)=> console.log(item))


const seen = new Set();
const duplicates = new Set();
names.filter(items=>{
    if(seen.has(items)){
        duplicates.add(items)
    }else{
        seen.add(items)
    }
})

const final = [...duplicates];
console.log(final);


const original = { a: 1, b: { c: 2 } };
let shalowCopy = {...original};
shalowCopy.b.c = 5;
console.log(shalowCopy.b.c);
console.log(original.b.c);

