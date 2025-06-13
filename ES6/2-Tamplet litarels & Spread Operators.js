
const countryName =  "Bangladesh";
const country = "My country name is " + countryName + " BD";

console.log(country);  //My country name is Bangladesh BD


//  template literals in JavaScript:
// - Use backticks (` `) instead of quotes ("" or '') for dynamic strings.
// - Insert variables inside ${} within a template literal.
//They allow multi-line strings and variable interpolation using ${}.
//  - Example:

const country2 = `Her country name is ${countryName} BD`; //My country name is Bangladesh BD
console.log(country);

const name = "Naba";
console.log(`Hello, ${name}!`);  // Hello, Naba!


// Now   Spread Operators:
// - String Concatenation Issue
// When you do console.log(n1 + n2), JavaScript converts both arrays into strings and concatenates them instead of merging the arrays.

const n1 = [1,2,3,4,4,5,6,7];
const n2 = [11,22,33,44,55,66,77];
console.log(n1+n2);   // 1,2,3,4,4,5,6,711,22,33,44,55,66,77

// - Correct Way to Merge Arrays
// If you actually want to merge them, you should use the spread operator like this:

console.log(n1, n2);
// [
//   1, 2, 3, 4,
//   4, 5, 6, 7
// ] [
//   11, 22, 33, 44,
//   55, 66, 77
// ]

// But
// Spread Operators:
console.log(...n1, ...n2);  //1 2 3 4 4 5 6 7 11 22 33 44 55 66 77

// - Finding Max/Min in Arrays

console.log(Math.max(...n1));  // 7
console.log(Math.max(...n2));  // 77
console.log(Math.min(...n2))   // 11