// var: Function-scoped and can be reassigned. Avoid using due to hoisting issues and redeclaration risks.
//      var allows redeclaration within the same scope, which can lead to unintended overwrites.
// let: Block-scoped and can be reassigned, making it safer than var.
// const: Block-scoped and cannot be reassigned, ensuring constant values.

// Best practices:
// - Use 'let' for variables that may change.
// - Use 'const' for fixed values to write safer, more predictable code.
// - let and const do not allow redeclaration in the same scope

var n = 5;
var n = 9;
console.log(n);   // 9


function sum()
{
    if(true)
        var h = "Naba";

    if(true)
        console.log(h);
}

sum();


// For solving var's issue we use conts and let
// function add()
// {
//     if(true)
//         const h = "Naba"   // will show error

//     if(true)
//         console.log(h);
// }

// add();

// const a = 6;
// const a = 9;

// console.log(a);  //SyntaxError: Identifier 'a' has already been declare

const a = 6;
let b = 9;


var x = 4;
x = 3;
console.log(x);   // 3

const y = 5;
// y = 0;     // error, can't reasign
console.log(y);   // 5

let z = 9;
z = 4;
console.log(z);  // 4, can reasign


// var x = 4; x = 3; 
//    works because var allows reassignment.
// const y = 5; 
//    cannot be reassigned (y = 0; would cause an error).
// let z = 9; z = 4; 
//    works because let allows reassignment.
// const a = 6; 
//    is constant and cannot be modified.
// let b = 9; 
//    is flexible and can be updated if needed
