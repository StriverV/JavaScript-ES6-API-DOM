
var status = "NO rain";

if(status == "rain")
    console.log("Can't Go");
else if(status =="sunny")
    console.log("stay home")
else
{
    console.log("Can go now")
}

// ----------------------
if(true)
    console.log("stay home")   //execute
else
    console.log("Can go now")


    // ----------------------
if(false)
    console.log("stay home")  
else
    console.log("Can go now")   //execute

// ----------------------
var n=300;
if(n > 120 && n < 140)
    console.log("D");
else if(n >= 240)
    console.log("A+");
else if(n > 120 || n > 140)
   console.log("Passed");
    
