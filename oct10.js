// Test data 1: User is null (simulates no data loaded)
const user1 = null;

// Test data 2: User data is loaded but is missing a name property
const user2 = { age: 45, email: "john@example.com" };

// Test data 3: User data is complete
const user3 = { name: "Alex", age: 30 };
function testChaining(user) {
  const userName = user?.name || "Guest";
  return userName;
}
// console.log(testChaining(user1));
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
  { name: "Niamul", age: 24, role: "Student" },
  { name: "Rahim", age: 31, role: "Engineer" },
  { name: "Nishita", age: 26, role: "Manager" },
  { name: "Tommy", age: 28, role: "Analyst" },
];

//understanding find
//find return a single value which matched with the condition and in false condtion it returns undefined
const firstOlderPerson = people.find((items) => items.age > 25);
// console.log(firstOlderPerson);

//understanding some
//some returns true or false based on the given condition
const useSome = people.some((items) => items.role === "Egineer");
// console.log(useSome);

//understanding every
// if we wanna check multiple vlaue at once it also returns tru or false
const useEvery = people.every((item) => item.age > 31);
// console.log(useEvery);

// Code Challenge 💡

const namearr = ["tom", "alice", "bob"];
// function formatNames(names) {
//     const mapping = names.map(item => {
//         return item.toUpperCase();
//     });
//     return mapping;
// }

// console.log(formatNames(namearr));



//another way we can do this
function formatNames(names) {
  const newArr = names.map((items) => {
    //with map iterate each item in the arry and select the every items first letter with charAt and make it uppercase
    const firstLatter = items.charAt(0).toUpperCase();
    // with slice(1) it takes rest of the str from 1 to last index except 0 
    const restOfTheStr = items.slice(1);
    return firstLatter + restOfTheStr;
  });
  return newArr;
}
console.log(formatNames(namearr));


// optional chaining with find 
const people1 = [
  { name: "Niamul", age: 24, role: "Student" },
  { name: "Rahim", age: 31, role: "Engineer" },
  { name: "Nishita", age: 26, role: "Manager" },
  { name: "Tommy", age: 28, role: "Analyst" },
];

const combine = people1.find(item => item.name === "Nishita");
console.log(combine?.role);



const product = {
    id: 'A123',
    name: 'Laptop',
    price: 1200,
    inStock: true
};

// 1. Get an array of all keys from the 'product' object.
const productKeys = Object.keys(product);

// 2. Get an array of all values from the 'product' object.
const productValues = Object.values(product);

// 3. Loop through the 'productKeys' array and for each key, 
//    log the key and its corresponding value from the 'product' object.
// Example log: "id: A123"

// ... your code here ...
// for(let i =0; i <= productKeys.length -1; i++){
//     console.log(`"${productKeys[i]} : ${productValues[i]}"`)
// }

productKeys.forEach((item,idx)=> console.log(`"${item} : ${productValues[idx]}"`));
// another solution for this with less memory consumtion they return the samething
productKeys.forEach(key=> console.log(`"${key} : ${product[key]}"`) );
