
let a = [];

for(let i = 1; i <= 50; i++)
{
    if(i%3 == 0 && i%5 == 0)
        a.push(i);
}

console.log(a);