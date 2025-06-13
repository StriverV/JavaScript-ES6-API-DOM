//-----------------------------1. Object Destructuring-----------------------
const person=
{
    name:"test",
    age:20,
    friends:["x","y","z"],
};
//-------------Accessing Object Properties Directly-----------

console.log(person.age);
// This works fine but can be repetitive if used multiple times
console.log(person.age);
console.log(person.age);

//-------------Storing the Value in a Variable-----------
// so we can reduce that task
// const age = person.age;
// console.log(age);
// This avoids repetitive calls to person.age and makes the code cleaner.

const age_1 = person.age;
console.log(age_1);


//------------- Using Object Destructuring-----------
// another way
// const { age } = person;
// console.log(age);


const { age, friends} = person;
console.log(friends);

// Object destructuring extracts properties in one step, making the code more readable and concise. This method is 
// especially useful when working with multiple properties from an object.


// ----------------------------- 2. Array Distructuring -------------------
const arr = ["Nosratee",5,"Naba"];
// Accessing Array Elements Traditionally
const name = arr[0];
const id = arr[1];
console.log(name);
console.log(id);

// Using Array Destructuring
//  It allows you to extract values from an array and
//   assign them to individual variables in a single step.
// - The first element "Nosratee" is assigned to a

const [a,b,c] = arr;
console.log(a,b,c);  // Nosratee 5 Naba
// If you only need specific elements
console.log(b);   // 5
console.log(c,a,b);  // Naba Nosratee 5


const [one,two,three] = arr;
console.log(one,two,three);   //Nosratee 5 Naba
// Array destructuring is super handy when working with function returns, loops, and APIs. 

// Swapping Values Using Destructuring
let x = 10, y = 20;
[x, y] = [y, x];

console.log(x, y); // 20 10