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

// myPromise("Overthinking",2000).then(res=> console.log(res)).catch(error=> console.log(error)).finally(()=> console.log("finally you recived the data or not i guess "))



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
console.log(idGen.next().value);