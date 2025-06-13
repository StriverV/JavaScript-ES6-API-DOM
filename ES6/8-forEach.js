const arr = 
[
    {id:1, name:"XYZ", description:"this is XYZ", price:500, color:"black"},
    {id:2, name:"abc", description:"this is abc", price:500, color:"blue"},
    {id:3, name:"uvw", description:"this is uvw", price:500, color:"red"},
    {id:4, name:"jhg", description:"this is XYZ", price:500, color:"black"},

]

// - .forEach() does not return anything
const result = arr.forEach(i => i);
console.log(result);  // undefined

// - It's used for iteration and performing actions, but not for creating a new array (unlike .map()).
// - This correctly logs each id, one by one.

const result2 = arr.forEach(i => {
    console.log(i.id);
});
console.log(result2); 