
function monthlySavings(a, n)
{
    if(!Array.isArray(a) || !a.every(i => typeof i == "number"))
        return "invalid input";


    let savings = 0;
    let arr = [];

    for(let i = 0; i < a.length; i++)
    {
        if(a[i] >= 3000)
        {
            arr.push(a[i] - (a[i] * 0.20));
        }
        else
        {
            arr.push(a[i]);
        }
        savings += arr[i];
       
    }
  
    if(savings - n  < 0 )
       return "earn more";
    else
       return savings - n; 
}



let a = [1000, 2000, 3000];
let b = [1000, 2000, 2500];
let c = [900, 2700, 3400];
let d = [900, 2700, 3400];

let n1 = 5400;
let n2 = 5000;
let n3 = 10000;
let n4 = 100;

console.log(monthlySavings (a, n1));
console.log(monthlySavings (b, n2));
console.log(monthlySavings (c, n3));
console.log(monthlySavings (n4, d));

