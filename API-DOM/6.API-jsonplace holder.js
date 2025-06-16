/* “Continue with Google” uses OAuth 2.0 API + Google Identity API
//  It gives you a token, you use that to fetch user info from Google's API
// fetch is a built-in JavaScript function used to make HTTP requests (like GET, POST, etc.) to a server or API.

// It’s mostly used to get data from APIs — like when you call Google, Weather, or any public API.

---------fetch() 
is a JavaScript function to send or receive data from servers or APIs.
fetch is a built-in JavaScript function used to make HTTP requests (like GET, POST, etc.) to a server or API.

It’s mostly used to get data from APIs — like when you call Google, Weather, or any public API.
----------------
How does it work?
You call fetch(url)
It sends a request to that URL
The server sends a response
You process the response (usually convert to JSON)
You use the data

-------------

 You place an order in a restaurant → fetch()
Waiter brings back your food → .then(response)
You eat/process the food → .then(data)
If something goes wrong → .catch(error)

--------------
fetch() works in:
All modern browsers
Node.js (with node-fetch or similar libraries)



// https://jsonplaceholder.typicode.com/users

*/
/* Let’s use a free public API — like the JSONPlaceholder (it gives fake data for testing):
 API: https://jsonplaceholder.typicode.com/users
*/
fetch("https://jsonplaceholder.typicode.com/users")    // Make a GET request to this API URL
   .then( res => console.log(res)) 
   .then( res => res.json())    // Convert the response to JSON format
   .then( data => {console.log(data)});      // Print the fetched data (an array of users) in the console});
// now,You can easily loop through the JSON data (which is an array of users) and use it however you want.
// for (let i = 0; i < data.length; i++) { ... } → classic for loop
// for (let user of data) { ... } → modern and simple

/*    .catch(error => console.error("Error:", error));
// This will catch network errors or JSON parsing errors.

// // Visual analogy:
// Imagine ordering a package online (fetch).
// The package arrives in a box (Response object).
// Step 2: You look at the box label (status, headers) but don't open it.
// Step 3: You open the box (res.json()) and unpack the contents (JSON data).
// Step 4: You finally see the actual products inside (the data array) and look at them.

------------------------------------------------
What is fetch()?
It’s like asking the internet:
“Hey! Give me some data from this URL.”

 ---------------1. Send request to the website----------------
 fetch("https://...")
This asks the server for user data.
The server replies with a response (not the data yet!).

--------------- 2. Log the response box (not data)----------------
  .then(res => console.log(res))
This shows the response object.

It has things like:
 status code (200)
 type of response
 NOT the real data yet

---------------3. Open the box and get real data ----------------
.then(res => res.json())
Now we say:
“Okay, open the box and give me the real data in JSON (JavaScript object) format.”

--------------- 4.Log the actual data (user list)----------------
 .then(data => { console.log(data); })
Finally, we get the real data — an array of users!

It looks like:
[
  { id: 1, name: "Leanne Graham", ... },
  { id: 2, name: "Ervin Howell", ... },
  ...
]

Output:
You will finally see an array like this:

js
Copy code
[
  { id: 1, name: "Leanne Graham", email: "...", ... },
  { id: 2, name: "Ervin Howell", email: "...", ... },
  ...
]
/*
What happens here:
-fetch sends a request to the URL.
-The first .then takes the response and parses it as JSON.
-The second .then receives the actual data and you log it to the console.
-If you open your browser's developer console and run this, you'll see a list of user objects.

JSON stands for:
JavaScript Object Notation
It’s a format to store data — like text — that looks like JavaScript objects.
 A neat, readable way to send or store data between systems — like from a server to your browser.

 .json()	--> Convert JSON to JS object
 Used for	Sending/receiving data
*/

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

