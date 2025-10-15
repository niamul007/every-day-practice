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



const textCounts = { 
    one: 'a', 
    two: 'bb', 
    three: 'ccc',
    four: 100 // Ignore this value, as it's not a string
};

// Expected calculation: 'a'(length 1) + 'bb'(length 2) + 'ccc'(length 3) = 6

// ... your code here using Object.entries() and reduce() ...

const obj = Object.entries(textCounts);

const length = obj.filter(item=> typeof item[1] === 'string');
const sum = length.reduce((acc,pair)=>{
    return acc + pair[1].length;
},0)
console.log(sum)