// array named products that holds an object
// const products = 
// [
//     {name:"XYZ", description:"this is XYZ", price:500, color:"black"}
// ]

const arr = 
[
    {id:1, name:"XYZ", description:"this is XYZ", price:500, color:"black"},
    {id:2, name:"abc", description:"this is abc", price:500, color:"blue"},
    {id:3, name:"uvw", description:"this is uvw", price:500, color:"red"},
    {id:4, name:"jhg", description:"this is XYZ", price:500, color:"black"},

]

// for(let i = 0; i < products.length; i++)
// {
//     console.log(products[i])
// }

for(let i = 0; i < arr.length; i++)
{
    const element = arr[i];
 if(element.id == 1)
    {
        console.log(element);
    }
}

   

//  Modern find() Method (ES6)

const result = arr.find(i => i.id == 2);
console.log(result);

// output: as object
// {
//   id: 2,
//   name: 'abc',
//   description: 'this is abc',
//   price: 500,
//   color: 'blue'
// }
// - .find() automatically searches for the first match where id == 2.
// - It stops as soon as it finds the first matching element, making it more efficient than looping through the entire array
// - Shorter code 
// - More optimized (no unnecessary iterations)
