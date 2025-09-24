// Array Methods (must know)

// push(), pop(), shift(), unshift()

// forEach(), map(), filter(), find()

// let arr = [1,2,4,5,6,7,8,9,9];
// let addMechnism = arr.push(101);
// let delMechnism = arr.pop(9);
// let delMechnism = arr.shift(); // it del the first item from an arry \
// let addMechnism = arr.unshift(21); // it add the first item from an arry
// console.log(arr)

// let fruits = ["apple","guava","pomigranate","litchi"];
// const colors = ["Red", "Green", "Blue", "Yellow"];

// // colors.forEach((items,index,arr)=>{
// //     console.log(items)
// // })
// // colors.forEach((items,index,arr)=>{
// //     console.log(index)
// // })
// colors.forEach((items,index,arr)=>{
//     console.log(`color ${index} : ${items}`)
// })

// const colors = ["RED", "GREEN", "BLUE", "YELLOW"];
// colors.forEach((items, index, arr)=>{
//     arr[index] = items.toLowerCase();
// })
// console.log(colors);

const numbers = [2, 4, 6, 8, 10];

// let sum = 0;
// numbers.forEach((items)=>{
//     sum+=items;
// })

// numbers.forEach((items,idx,arr)=>{
//     arr[idx] = items*2;
// })
// let str =""
// numbers.forEach((item,idx,arr)=>{
//     str = arr.join("-")
// })

// console.log(str)
--
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    if (!res.ok) {
      throw new Error("response isn't ok " + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data.value);
  })
  .catch((err) => {
    console.error("There was a problem with the fetch operation:", err);
  });
