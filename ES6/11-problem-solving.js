
//  find the longest name instead 
const checkNames = (a) =>
{

    let big = a[0];
    for(let i = 1; i < a.length; i++)
    {
        if(a[i].length > big.length)   // Compare based on string length  but array of numbers -> (arr[i] > big) 
            big = a[i];
    }
    return big;
}




const a = ["ChatGPT", "Microsoft Copilot", "Claude", "Google Gemini"];

const bigName = checkNames(a);
console.log(bigName)  //Microsoft Copilot


//  a = 0: 
// const checkNames = (a = 0) =>{}
//    Defaults a to 0, which is useful if dealing with numbers.
//  a = []:
// const checkNames = (a = []) =>{}
//     Defaults a to an empty array, ensuring the function always has something to work with.
//  a (no default): 
// const checkNames = (a ) =>{}
//    Requires an argument when calling the function.
