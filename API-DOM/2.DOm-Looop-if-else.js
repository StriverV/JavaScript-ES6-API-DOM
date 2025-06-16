// Goal:
// Make all .box elements have a green background 
// But make the one with text "Box-5" red

const a = document.getElementsByClassName("box"); //Finds all elements with class box.

for(let i = 0; i < a.length; i++)
{
    const element = a[i];
    element.style.backgroundColor = "green";            // Sets background color to green.
    
    if(element.innerText == "Box-5")
    {
        element.style.backgroundColor = "red";     // If the text inside the box is "Box-5", change color to red instead.
    } 
}