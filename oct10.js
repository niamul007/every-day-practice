// Test data 1: User is null (simulates no data loaded)
const user1 = null; 

// Test data 2: User data is loaded but is missing a name property
const user2 = { age: 45, email: "john@example.com" };

// Test data 3: User data is complete
const user3 = { name: "Alex", age: 30 }; 
function testChaining(user){
    const userName = user?.name || "Guest";
    return userName;
}
console.log(testChaining(user1));
// function getUsernameSafely(user) {
//     // 1. user?.name: Safely tries to access 'name'. 
//     //    - If user is null, it returns undefined.
//     //    - If user is {name: "Alex"}, it returns "Alex".
//     //    - If user is {age: 45}, it returns undefined (as 'name' is missing).
    
//     // 2. || "Guest": The OR operator checks the result of the left side.
//     //    - If the left side is falsy (undefined, null, or empty string ""), 
//     //      it uses the right side ("Guest").
//     const username = user?.name || "Guest";
    
//     return username;
// }

// console.log("User 1 Name:", getUsernameSafely(user1)); // Output: Guest
// console.log("User 2 Name:", getUsernameSafely(user2)); // Output: Guest
// console.log("User 3 Name:", getUsernameSafely(user3)); // Output: Alex


const people = [
    { name: 'Niamul', age: 24, role: 'Student' },
    { name: 'Rahim', age: 31, role: 'Engineer' },
    { name: 'Nishita', age: 26, role: 'Manager' },
    { name: 'Tommy', age: 28, role: 'Analyst' }
];

const firstOlderPerson = people.find((items=> items.age > 25));
console.log(firstOlderPerson)

// console.log(firstOlderPerson); 
// Expected Output: { name: 'Rahim', age: 31, role: 'Engineer' }