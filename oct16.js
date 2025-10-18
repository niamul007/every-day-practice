// Function that resolves after a delay
// const createResolvedPromise = (name, delay) => new Promise(resolve => 
//     setTimeout(() => resolve(`${name} success`), delay)
// );

// Function that rejects after a delay
// const createRejectedPromise = (name, delay) => new Promise((_, reject) => 
//     setTimeout(() => reject(`${name} failure`), delay)
// );


// const p1 = createResolvedPromise('P1', 1000);
// const p2 = createResolvedPromise('P2', 2000);
// const p3 = createRejectedPromise('P3', 1500); // This one will reject

// Use Promise.allSettled() here
// Promise.allSettled([p1, p2, p3])
// .then(results => console.log(results));

// Promise.allSettled([p1, p2, p3])
// .then(results => console.log(results));

// ... your code here ...

// const accecptPromise = (name,reason) => new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve( `${name} and the the reason to fallback ${reason}`)
//     },2000)
// });

// const p4 = accecptPromise("Niamul","She never tried to stay");
// Promise.allSettled([p4]).then(result => console.log(result))
// .catch(error=> console.log(error))


const pSlow = new Promise(resolve => {
    setTimeout(() => resolve("Slow promise (2s)"), 2000);
});

const pFast = new Promise(resolve => {
    setTimeout(() => resolve("Fast promise (0.5s)"), 500);
});

// Use Promise.race() here and consume the result:
Promise.race([pSlow, pFast]).then(resut=> console.log(resut)).catch(error=> console.log(error));

const myPromise = (situation,delay) => new Promise (resolve=>{
    setTimeout(() => {
        resolve(`${situation} is a bad habit`);
    }, delay);
})

// myPromise("Overthinking",2000).then(res=> console.log(res))i think i .catch(error=> console.log(error)).finally(()=> console.log("finally you recived the data or not i guess "))



function* idGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield { value: undefined, done: true };
}

const idGen = idGenerator();

// Call the generator three times (Done on Day 11)
idGen.next(); 
idGen.next(); 
idGen.next(); 

// Call .next() a fourth time and log the entire result object:
// console.log(idGen.next().value);

// Example of the steps:
// 1. Math.random()            // e.g., 0.987654321
// 2. .toString(36)            // e.g., "0.l4r2a9k" (Base 36 uses 0-9 and a-z)
// 3. .substring(2, 9)         // e.g., "l4r2a9k" (Skips "0.")

function generateRandomId() {
    const random = Math.random().toString(36).substring(2,9)
    return random;
}
console.log(generateRandomId()); // Expected: A 7-character alphanumeric string (e.g., 'a8d3hj4')
// console.log(generateRandomId()); // Expected: A different 7-character string