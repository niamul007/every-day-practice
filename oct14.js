// 1. Define the component function (The "wrapped" component)
const MyComponent = () => '<h1>Hello</h1>';

// 2. Define the High-Order Function (HOF)
function withLogger(Component) {
    // The HOF returns the new, enhanced function
    return function() {
        // ENHANCEMENT (Logging)
        console.log(`Component "${Component.name || 'MyComponent'}" is rendering`); 
        
        // COMPOSITION (Calling the original function)
        // We call Component() to get its output and include it in our result.
        return `this function hasve the first fucntion value ${Component()}`;
    };
}

// 3. Create the enhanced component
const EnhancedComponent = withLogger(MyComponent);

// 4. Call the enhanced component (runs the enhanced function)
console.log(EnhancedComponent());



// const textCounts = { 
//     one: 'a', 
//     two: 'bb', 
//     three: 'ccc',
//     four: 100 // Ignore this value, as it's not a string
// };

// // Expected calculation: 'a'(length 1) + 'bb'(length 2) + 'ccc'(length 3) = 6

// // ... your code here using Object.entries() and reduce() ...

// const obj = Object.entries(textCounts);

// const length = obj.filter(item=> typeof item[1] === 'string');
// const sum = length.reduce((acc,pair)=>{
//     return acc + pair[1].length;
// },0)
// console.log(sum)

// for better understanding 

const textCounts = { 
    one: 'a', 
    two: 'bb', 
    three: 'ccc',
    four: 100
};

// 1. Object.entries(textCounts) creates this array of arrays:
const entries = [ 
//  [0]     [1]
    ['one', 'a'],         // <--- This is the first 'item'
//  [0]     [1]
    ['two', 'bb'],        // <--- This is the second 'item'
//  [0]     [1]
    ['three', 'ccc'],     // <--- This is the third 'item'
//  [0]     [1]
    ['four', 100]         // <--- This is the fourth 'item'
];

// Example: The current 'item' is ['one', 'a']

// .filter(item => typeof item[1] === 'string') 
//             ^
//           item[1]

// What is item[1]?
// item[0] is 'one' (the key)
// item[1] is 'a'   (the value)

// The code is checking: typeof 'a' === 'string' (True)

// Example: The current 'pair' is ['two', 'bb']

// .reduce((acc, pair) => {
//     return acc + pair[1].length;
//     //           ^
//     //         pair[1]
// }, 0); 

// What is pair[1]?
// pair[0] is 'two' (the key)
// pair[1] is 'bb'  (the value)

// The code adds the length of the string: acc + 'bb'.length


// .reduce((acc, [key, value]) => {
//     // We now have a clean variable named 'value'
//     return acc + value.length; 
// }, 0);

const inventory = {
    monitor: { price: 300, inStock: true },
    keyboard: { price: 75, inStock: false },
    mouse: { price: 50, inStock: true },
    headphones: { price: 150, inStock: true },
    webcam: { price: 40, inStock: false }
};

// Expected calculation: 300 (monitor) + 50 (mouse) + 150 (headphones) = 500

// ... your code here ...

const newObj = Object.entries(inventory).filter(item=> item[1].inStock === true).reduce((acc,curr)=> {
    return acc+ curr[1].price;
},0)

console.log(newObj)