const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Diana", age: 16 },
];

// let filters = users.filter((item) => item.age > 18).map((item) => item.name);
// console.log(filters);

const cart = [
  { id: 1, name: "Laptop", price: 1000, qty: 1 },
  { id: 2, name: "Phone", price: 500, qty: 2 },
  { id: 3, name: "Headphones", price: 100, qty: 3 },
];

// let sum = 0;
// let sumAll = cart.map(item =>{
//     let all = item.price*item.qty;
//     sum+=all;
// })
// console.log(sum);

const total = cart.reduce((accumulator, item) => {
  return accumulator + item.price * item.qty;
}, 0); // 0 is the initial value of accumulator

// console.log(total); // 2300
// ✅ Your task: use reduce to calculate total price
// Formula: price * qty for each item
// Expected total: 1000*1 + 500*2 + 100*3 = 2300

const cart2 = [
  { id: 1, name: "Laptop", price: 1000, qty: 1, category: "electronics" },
  { id: 2, name: "Phone", price: 500, qty: 2, category: "electronics" },
  { id: 3, name: "Shoes", price: 100, qty: 3, category: "fashion" },
  { id: 4, name: "Watch", price: 200, qty: 1, category: "fashion" },
];

let filterCart = cart2
  .filter((item) => item.category == "electronics")
  .map((item) => `${item.name} ${item.qty} x ${item.price}`);
console.log(filterCart);

let total2 = cart2
  .filter((item) => item.category == "electronics")
  .reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);
console.log(total2);
// let filterCat = cart2.filter(item=> item.category == "electronics").map(item=>{
//     let str = `${item.name} ${item.qty}x ${item.price} = ${item.category}`
//     console.log(str);
// })
// let forReduce = cart2.filter(item=> item.category == "electronics").reduce((acc,item)=>{
//     return acc + item.price
// })
// console.log(forReduce)

//my name is jihad