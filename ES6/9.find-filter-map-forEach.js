const arr = 
[
    {id:1, name:"XYZ", description:"this is XYZ", price:500, color:"black"},
    {id:2, name:"abc", description:"this is abc", price:500, color:"blue"},
    {id:3, name:"uvw", description:"this is uvw", price:500, color:"red"},
    {id:4, name:"jhg", description:"this is XYZ", price:500, color:"black"},

]
// ------------------ 1) .find() -------------------------------------------------
//   - Find First Matching Element
//   - Returns the first element that matches the condition.
//   - Stops searching once a match is found**.
//   - Returns an object or undefined if no match is found.

// Use Case: Finding a specific product by id

const result = arr.find(item => item.id === 2);
console.log(result); 

// Output: { id: 2, name: "ABC", price: 800 }

// ------------------2).filter() --------------------------------------------------
//  - Find All Matching Element
//  - Returns all elements that match the condition.
//  - Does not stop after finding one match.
//  - Always returns an arra (even if only one item matches).

// Use Case: Filtering products by price

const filteredResults = arr.filter(item => item.price === 500);
console.log(filteredResults);
// Output: [{ id: 1, name: "XYZ", price: 500 }, { id: 3, name: "UVW", price: 500 }]



// ------------------3).map()----------------------------------------------
//   -Transform Each Element
//   - Returns a new array with transformed values.
//   - Does not modify the original array.
//   - Used for modifying or extracting specific properties.

// Use Case: Extracting all product names

const productNames = arr.map(item => item.name);
console.log(productNames);
// Output: ["XYZ", "ABC", "UVW", "JHG"]

// Doubling all product prices

const updatedPrices = arr.map(item => item.price * 2);
console.log(updatedPrices);
// Output: [1000, 1600, 1000, 1000]


// ------------------4) .forEach()---------------------------------
//  - Iterate Over Elements
//  - Does not return a new array.
//  - Used for executing actions on each element.
//  - Ideal for logging or modifying elements in-place

// Use Case: Logging all product names

// const result2 = arr.forEach(item => {
//     console.log(item.name);
// });
// or 
const result2 = arr.forEach(item => {
    console.log(item.name);
});
// Output: XYZ, ABC, UVW, JHG

// Modifying elements directly

const result3 = arr.forEach(item => {
    item.price += 100; // Increases price by 100
});
console.log(result3);


