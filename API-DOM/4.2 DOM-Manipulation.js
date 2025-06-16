// goal: handleAddCommentWithDeleteOnClick();
document.getElementById("handleADD").addEventListener("click", (event) =>
    {
       const inputValue = document.getElementById("search-box").value;   // Get the text input

       const container = document.getElementById("comment-container");   // Get the comment box (div)

       
       const p = document.createElement("p");  //Create a new <p> tag
       
       p.classList.add("child");

       p.innerText = inputValue;   // Put the input text inside the <p>

       container.appendChild(p);  //Add the <p> to the comment box

       document.getElementById("search-box").value="";   // Clear the input field
    
       const a = document.getElementsByClassName("child");   // a -> all Comment
     
    //    for (let i = 0; i < a.length; i++) {
    //          const x = a[i];  }

    // sc
    //    for (const element of object) {}
       
        console.log(a);
    
        for (const i of a)
        {
            i.addEventListener("click", (e) => 
            {
                // console.log(e.target);
                //  console.log(e.target.parentNode);
                e.target.parentNode.removeChild(i);
            });
        }
    }
);

// added click event to all comments every time, not just the new one.
// Result:
// Repeated listeners on old comments
// Can cause multiple deletions or performance issues



// so,
//Now, only the new comment gets the click listener — simple and clean.
// document.getElementById("handleADD").addEventListener("click", (event) =>
//     {
//        const inputValue = document.getElementById("search-box").value;   // Get the text input
//        const container = document.getElementById("comment-container");   // Get the comment box (div)

       
//        const p = document.createElement("p");  //Create a new <p> tag
       
//        p.classList.add("child");
//        p.innerText = inputValue;   // Put the input text inside the <p>

//        container.appendChild(p);  //Add the <p> to the comment box
//        document.getElementById("search-box").value="";   // Clear the input field
    
    
    
//         p.addEventListener("click", (e) => {
//               e.target.remove();
//         });
        
//     }
// );


