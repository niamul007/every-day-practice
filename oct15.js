const multiply = (a) =>{
    return (b)=>{
        return (c)=>{
            return a*b*c;
        }
    }
}

// console.log(multiply(2)(3)(4));

// const p1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("one")
//     },1000);
// })

// const p2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("two");
//     }, 2000);
// });

// Promise.all([p1, p2])
//   .then((results) => {
//     console.log(results); // ["One", "Two"]
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("One");
    },1000)
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("two")
    },2000)
})

// Promise.all([p1,p2])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });


// Remember the structure: (a) => (b) => { ... }

const addTax = (rate)=>{
    return (price)=> {
        let total = rate*price;
        return price + total;
    }
} /* ... your function here ... */


const addSalesTax = addTax(0.08);
console.log(addSalesTax(100)); // Expected: 108


// 1. Define the Generator function (note the *)
function* idGenerator() {
   yield 1;
   yield 2;
   yield 3;
}

const idGen = idGenerator();

console.log(idGen.next().value); // Expected: 1
console.log(idGen.next().value); // Expected: 2
console.log(idGen.next().value); // Expected: 3

// ... your code here ...
