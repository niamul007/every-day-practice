// console.log("1. Start");

// Promise.resolve().then(() => {
//     console.log("3. Promise Resolved (Microtask)");
//     console.log("4. Promise Resolved (Microtask)");
// });

// console.log("2. End of Sync Code");

// The Promise will execute, but where?
// 4. The final output is here (after 3) 


// console.log("A. Start of Sync Code"); //A

// setTimeout(() => {
//     console.log("D. setTimeout (Macrotask)");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C. Promise Resolved (Microtask)");
// });

// console.log("B. End of Sync Code");

// because after finishing the sync operations task qoueee
//  prioritize promise to exucute first promise vlue is higher than settimeout


// Function to simulate an API call
function fetchNextPage(page) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for Page ${page}`), 200);
    });
}

async function* pageFetcher() {
    console.log("loading...");
    try {
        let page = 1;
        while (true) {
            // 1. PAUSE execution here (due to yield).
            // 2. When .next() is called, execute the await.
            const data = await fetchNextPage(page);
            
            // 3. YIELD the resolved data and PAUSE again, waiting for the next .next() call.
            yield data; 
            
            page++;
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Assume pageFetcher is your async generator function*
const asyncGen = pageFetcher();

async function processData() {
    // The loop automatically calls await asyncGen.next() 
    // and extracts the .value for each iteration.
    for await (const data of asyncGen) {
        console.log("Received:", data);
        
        // The loop will stop when the generator returns { done: true }
        if (data === "Data for Page 5") {
            break; // You can exit early if needed
        }
    }
}

processData();

