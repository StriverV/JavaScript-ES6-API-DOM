//  Functionality:
// When the "ADD" button (handleADD) is clicked:
// It takes the value from the search-box input field.
// Creates a new <p> element.
// Sets the paragraph text to the input value.
// Appends this new <p> to the comment-container div.
// Clears the input field.

// document.getElementById("handleID").addEventListener("click", (event) => {});
// document.getElementById("handleID").addEventListener("click", (i) => {});
// goal:addParagraphFromInputOnClick

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

- ("click", ...)
- "click" is the type of event we want to listen for. 
  Other common events include "mouseover", "keydown", "submit", etc.

- Here, "click" means the function will run when the user clicks on the element.

- (event) => { ... }
- This is an arrow function, a modern way to write functions shorter and cleaner in JavaScript. It's than the traditional function syntax.
- The (event) part is a parameter that captures details about the event. 
For example, if a user clicks, event holds information like the coordinates of the click, the element clicked, and more.
- Inside { ... }, you define what happens when the event occurs. 
This could be changing an element’s color, logging a message, or triggering an animation.
----------------------------------
// click events
document.getElementById("handleID").addEventListener("click", (event) => {});

// Mouse events
document.getElementById("handleID").addEventListener("mouseover", (event) => {}); // Runs when mouse enters the element
document.getElementById("handleID").addEventListener("mouseout", (event) => {});  // Runs when mouse leaves the element

// Keyboard events
document.getElementById("handleID").addEventListener("keydown", (event) => {});  // Runs when a key is pressed
document.getElementById("handleID").addEventListener("keyup", (event) => {});    // Runs when a key is released

// Form events
document.getElementById("handleID").addEventListener("submit", (event) => {});   // Runs when a form is submitted
document.getElementById("handleID").addEventListener("change", (event) => {});   // Runs when an input value changes

// Window events
window.addEventListener("resize", (event) => {});  // Runs when the window is resized
window.addEventListener("scroll", (event) => {});  // Runs when the page is scrolled

These cover the most commonly used event listeners. If you need more, let me know!  

------------------------


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