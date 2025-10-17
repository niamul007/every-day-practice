// Function that resolves after a delay
const createResolvedPromise = (name, delay) => new Promise(resolve => 
    setTimeout(() => resolve(`${name} success`), delay)
);

// Function that rejects after a delay
const createRejectedPromise = (name, delay) => new Promise((_, reject) => 
    setTimeout(() => reject(`${name} failure`), delay)
);


const p1 = createResolvedPromise('P1', 1000);
const p2 = createResolvedPromise('P2', 2000);
const p3 = createRejectedPromise('P3', 1500); // This one will reject

// Use Promise.allSettled() here
Promise.allSettled([p1, p2, p3])
.then(results => console.log(results));

// Promise.allSettled([p1, p2, p3])
// .then(results => console.log(results));

// ... your code here ...

const accecptPromise = (name,reason) => new Promise(resolve=>{
    setTimeout(()=>{
        resolve( `${name} and the the reason to fallback ${reason}`)
    },2000)
});

// const p4 = accecptPromise("Niamul","She never tried to stay");
// Promise.allSettled([p4]).then(result => console.log(result))
// .catch(error=> console.log(error))


