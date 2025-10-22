// console.log("1. Start");

// Promise.resolve().then(() => {
//     console.log("3. Promise Resolved (Microtask)");
//     console.log("4. Promise Resolved (Microtask)");
// });

// console.log("2. End of Sync Code");

// The Promise will execute, but where?
// 4. The final output is here (after 3) 


console.log("A. Start of Sync Code"); //A

setTimeout(() => {
    console.log("D. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("C. Promise Resolved (Microtask)");
});

console.log("B. End of Sync Code");