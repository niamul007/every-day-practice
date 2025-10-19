
const user = {
    id: 1,
    name: "Alex",
    address: {
        city: "London",
        zip: 10101
    }
};

// ❌ Problem: This changes the original object because 'address' is the same reference!
// user.address.city = "New York"; 

// YOUR FIX GOES HERE: Create a new user object with the updated city.
const updatedUser = {
    ...user,
    address :{
        ...user.address,
        city : "New Work"
    }
}

console.log(updatedUser.address.city); // Should be "New York"
console.log(user.address.city);        // Should still be "London"



function fetchUser(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve({ id: 5, name: "Maria" });
            } else {
                reject(new Error("User not found!"));
            }
        }, 500);
    });
}

// YOUR SOLUTION GOES HERE: Use an async function and try/catch to call fetchUser(false)

async function getUserData(boolien) {
   try {
    const success = await fetchUser(boolien);
    console.log(success.name)
   } 
   catch (error) {
    console.log(error.message)
   }
}
getUserData(true);


const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Monitor', price: 300, inStock: true },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Webcam', price: 50, inStock: false }
];

// Expected calculation: 1200 + 300 + 75 = 1575

// YOUR SOLUTION GOES HERE: Use a single, chained expression
const totalInStockPrice =  products.filter(item => item.inStock === true).map(item=> item.price).reduce((acc,sum)=> acc+=sum)

console.log(totalInStockPrice);