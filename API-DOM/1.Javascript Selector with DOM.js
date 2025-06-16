/*
DOM = Document Object Model
      -means JavaScript can see and change your HTML page.

selector --> it helps JavaScript find HTML elements.
            so, we can read or change them.


1.-------------------Finds 1 element by its ID:---------------------------------------------
getElementById()
    -->document.getElementById("idName")

    html: <h1 id="title">Naba</h1>

    js:   let i = document.getElementById("title");
          i.innerText = "Nosratee";
    

2.-------------------Finds all elements by class name---------------------------------------------
getElementsByClassName()
    -->document.getElementsByClassName("className")

       html: <h1 id="title">Naba</h1>

       js:   let i = document.getElementsByClassName("title");
             i[0].innerText = "Nosratee";


3.-------------------Finds all elements by tag---------------------------------------------
getElementsByTagName()
    -->document.getElementsByTagName("p")

    html: <p>One</p>

    js: let i = document.getElementsByTagName("p");
           i[1].innerText = "two";

4.-------------------Finds the first match (CSS style)---------------------------------------------
querySelector()
    -->document.querySelector(".class" or "#id")

       html : <p class="text">Naba</p>

       js: let i = document.querySelector(".text");
           i.style.color = "red";


5.-------------------Finds all matches (CSS style)---------------------------------------------
querySelectorAll()
    -->document.querySelectorAll(".class")

      html : <p class="text">Naba</p>

      js:  let i = document.querySelectorAll(".text");
           i[i].style.color = "red";

    -------------
getElementById → 1 item
getElementsByClassName / TagName → Like arrays
querySelector → 1st match (flexible)
querySelectorAll → All matches

    ------------
Always use [0], [1] etc. for multiple elements
Use .style, .innerText to change elements
    --------------
ID is unique, so use getElementById() for single elements.
Class/tag may have many, so use [0], [1], etc.
querySelector is short and supports CSS selectors.
querySelectorAll lets you loop over multiple elements.


*/ 
// alert()
// console.log(document.getElementsByTagName("h1"));

// usinf class
const target = document.getElementsByClassName("title");
console.log(target);

// Since getElementsByClassName returns an HTMLCollection, remember that it’s not an array, though it behaves similarly in some cases. If you want to access a specific element, try:
console.log(target[0]); // First element with class "title"



// Using id
const target2 = document.getElementById("title");
console.log(target2);

// csstarget2
target2.style.color = "red";

