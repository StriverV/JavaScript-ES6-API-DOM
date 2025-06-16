

// 4
document.getElementById("handleADD").addEventListener
(
    "click", (event) =>
    {
       const inputValue = document.getElementById("search-box").value;   // Get the text input

       const container = document.getElementById("comment-container");   // Get the comment box (div)

       
       const p = document.createElement("p");  //Create a new <p> tag
       p.innerText = inputValue;   // Put the input text inside the <p>

       container.appendChild(p);  //Add the <p> to the comment box

       document.getElementById("search-box").value="";   // Clear the input field
    }
);

/*
Click the button (handleADD)
Read the text from the input (search-box)
Create a new <p> tag
Put the text into that <p>
Add the <p> into the comment area (comment-container)
Clear the input box
-------------------

addEventListener("click",...) --->	Waits for button click
.value	--->  Gets what user typed
createElement("p") --->  	Makes a new paragraph
.innerText = inputValue	--->  Adds user text to the paragraph
appendChild(p)	--->  Shows it inside the div
.value = ""	  --->  Clears the input field


--------------

document.getElementById("handleADD").addEventListener(...)
  Finds the button with id="handleADD"
  Adds an event listener that waits for a click
  When clicked, the function inside (event) => { ... } will run

const inputValue = document.getElementById("search-box").value;
  Finds the input field (id="search-box")
  Gets whatever the user typed inside the input box using .value
  Stores it in the inputValue variable
  if user types "Nice site!", now inputValue = "Nice site!"


const container = document.getElementById("comment-container");
  Finds the <div> with id="comment-container"
  This is where the new comment (<p>) will be added

const p = document.createElement("p");
  Creates a new <p> tag using JavaScript
  It's not visible yet — just created in memory

p.innerText = inputValue;
  Sets the text of the new <p> tag to whatever user typed
  So now, if input was "Nice site!", the <p> becomes:

container.appendChild(p);
  Adds the newly created <p> tag inside the #comment-container
  So you’ll see the comment appear on the webpage!

document.getElementById("search-box").value = "";
  Clears the input box after adding the comment
  So it's ready for the user to type something new
-----------------------------------------------

**Listen for clicks on the “Add Comment” button:
   document.getElementById("handleADD")
  .addEventListener("click", …);


**Get what the user typed:
   const inputValue = document.getElementById("search-box").value;

**Make a new <p> and put that text inside:
   const p = document.createElement("p");
   p.innerText = inputValue;


**Add the <p> to your comments area:
  document.getElementById("comment-container")
  .appendChild(p);


**Clear the input box so it’s ready for more:
   document.getElementById("search-box").value = "";
*/