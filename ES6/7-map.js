
const arr = 
[
    {id:1, name:"XYZ", description:"this is XYZ", price:500, color:"black"},
    {id:2, name:"abc", description:"this is abc", price:500, color:"blue"},
    {id:3, name:"uvw", description:"this is uvw", price:500, color:"red"},
    {id:4, name:"jhg", description:"this is XYZ", price:500, color:"black"},

]


// - .map() iterates through the array.
// - Returns a new array containing only the id values.

const result = arr.map(i => i.id);
console.log(result);  // [ 1, 2, 3, 4 ]

const multi1= arr.map(i => i.id*2);
console.log(multi1);  // [ 2, 4, 6, 8 ]


//Using Multi-Line Arrow Function
const multi2 = arr.map(i => {
    return i.id*2;
});
console.log(multi2);  // [ 2, 4, 6, 8 ]

// - .map() does not modify the original array; it creates a new one.
// - If using one line, the return keyword is implicit.
// - If using multiple lines, {} and return are necessary.
