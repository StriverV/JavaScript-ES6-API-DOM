
function add(n1,n2)
{
    const sum = n1+n2;
    console.log(sum);
}



add(2,3);
//But,
//  console.log(sum); throws an error,can't access sum,so we need return type function


function add1(a,b)
{
    const sum1 = a+b;
    return sum1;
}

console.log(add1(2,3));

const s = add1(4,5);
console.log(s);



function add2(a,b)
{
    const sum2 = a+b;
    return sum2;
}

//------------------------- Arrow Function -----------------------------

// After ES6, we use arrow function
// No need for return in single-line expressions
const add3 = (a,b) => a + b;
console.log(add3);   //[Function: add3], so need to call

const x = add3(10,20);
console.log(x);  // 30
console.log(add3(100,20));

// If the function body has more than one statement, {} and return are required.
const add4 = (a,b) =>
{
    return a+b;
}


const y = add4(100,20);
console.log(y);


//  a = 0: 
// const checkNames = (a = 0) =>{}
//    Defaults a to 0, which is useful if dealing with numbers.
//  a = []:
// const checkNames = (a = []) =>{}
//     Defaults a to an empty array, ensuring the function always has something to work with.
//  a (no default): 
// const checkNames = (a ) =>{}
//    Requires an argument when calling the function.