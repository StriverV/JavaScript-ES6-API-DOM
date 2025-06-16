
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
     

        console.log(a);
    
        for (const i of a)
        {
            i.addEventListener("click", (e) => 
            {
                e.target.parentNode.removeChild(i);
            });
        }
    }
);


//--------------------------------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/users")   
   .then( (res)  => res.json() )           //.then(...): Runs if the fetch is successful.
   .then( (data) => {console.log(data)
      arr(data); 
   })   
   .catch( (err) => {console.log(err)});   //.catch(...): Runs if there's an error (like no internet, bad URL, etc.).

// const displayData = (userdata) => {
//     const container = document.getElementById("userData-Container");
// }
const arr = (a) => {
    const container = document.getElementById("userData-Container");
    
    a.forEach(user => {
        const div = document.createElement("div");
        div.classList.add("user")

        div.innerHTML = `
           <h4>title</h4>
           <p>Description</p>
           <button>Details</button>
        `;

        container.appendChild(div);
    });
};
// div.innerHTML = 
//         `
//            <h4>${element.title}</h4>
//            <p>${element.description}</p>
//            <button>Details</button>
//         `;
// it will show different data for each element
// To show real data from the array, use ${element.title} and ${element.description}..


// a is expected to be an array (like from an API).
// x holds the container div where data will be shown.
// Use element.title and element.body to show dynamic data (like user posts).
// Make sure your HTML has:
// <div id="userData-Container"></div>
