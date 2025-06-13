var frnd = ["xy", 7, "ab", {name:"jhon"},["ra","kr"]];


// element->5  or size-> 5
// console.log(frnd.length);

// // index-> 0 to 4
// console.log(frnd[0]);
// console.log(frnd[1]);
// console.log(frnd[2]);
// console.log(frnd[3]);
// console.log(frnd[4]);


for(var i = 0; i < frnd.length; i++)
{
    console.log(frnd[i], "->",i);
}


for(var i = 0; i < frnd.length; i++)
{
    if(frnd[i] == "xy")
        console.log("Yes");
    else
        console.log("No");
}


for(var i = 0; i < 20; i++)
{
    var element = i;
    console.log(element);
}