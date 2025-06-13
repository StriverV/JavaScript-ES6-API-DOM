// .filter() works differently by returning all matching elements instead of just one

const arr = 
[
    {id:1, name:"XYZ", description:"this is XYZ", price:500, color:"black"},
    {id:2, name:"abc", description:"this is abc", price:500, color:"blue"},
    {id:3, name:"uvw", description:"this is uvw", price:500, color:"red"},
    {id:4, name:"jhg", description:"this is XYZ", price:500, color:"black"},

]

const result = arr.filter(i => i.id == 3);
console.log(result);

// output: as Array
// [
//   {
//     id: 3,
//     name: 'uvw',
//     description: 'this is uvw',
//     price: 500,
//     color: 'red'
//   }
// // ]
// - The filter() method iterates over the array.
// - It checks whether i.id == 3 for each item.
// - It returns an array containing all matching elements (even if there's more than one).

//--------------------------------------
// so,
//  .find()
//Syntax: 
//  const result = arr.find(i => i.id == 3);
//  console.log(result);

// - Returns the first matching element.
// - Stops searching once a match is found.
// - Returns a single object or undefined if no match is found.
// Output type: Object or undefined



//  .filter()
//Syntax: 
//  const result = arr.filter(i => i.id == 3);
//  console.log(result);

// - Returns all matching elements.
// - Continues checking through the entire array.
// - Always returns an array (even if only one item matches).
// Output type: Array