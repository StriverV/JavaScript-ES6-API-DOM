// returning even /odd numbers.

const Even_Odd = (a) =>
{
    let even_arr = [];
    let odd_arr = [];
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] % 2 == 0)
        {
            even_arr.push(a[i]);
        }
        else
        {
            odd_arr.push(a[i]);
        }
      
    }

    return even_arr;

}



const a = [1,2,3,4,5,6,7,8,9];

// const result = Even_Odd(a);  // [ 2, 4, 6, 8 ]
// console.log(result);
// or
console.log( Even_Odd(a) );   [ 2, 4, 6, 8 ]