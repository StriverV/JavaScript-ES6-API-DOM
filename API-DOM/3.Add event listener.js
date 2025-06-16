
/*
Imagine you're building a simple search box on a website:

 A user types something
 Clicks the "Search" button
 The page shows what they typed

Search bar   → .value      → Read/write input field value
                             to get what user typed
                            input.value

Add to cart  → .innerText  → Read/write text inside HTML element
                            to update "Cart: 2 items"
                            You want to display text on the page
                            output.innerText = ...
                            div.innerText = "Hello"

Form submit  → use both .value (input) and .innerText (messages)
Buttons      → use addEventListener("click", ...) to make them work
addEventListener  ->    Run function on user action (like click)
                        You want to react to user actions like click
                        element.addEventListener("click", fn)
                        .addEventListener("click", func)

*/
// Way 1: Inline Function
document.getElementById("handleSearch").addEventListener("click" ,(event)=>
{
    console.log("Hello Box")
});

// Finds the element with ID handleSearch.
// .addEventListener("click", ...): Waits for a click.
//     When you click the button, the console will show:
//        Hello Box
// (event) => { ... }: The function that runs when clicked.


//  Way 2: Named Function
// const handleSearch=(event) =>
// {
//     console.log("Hello Box");
// }
//-------------
document.getElementById("handleSearch").addEventListener("click" ,(event)=>
{
    const inputValue = document.getElementById("search-box").value;
    console.log(inputValue);
});
// html: <input id="search-box" type="text" placeholder="Type anything..."/>
// .innerText
//    Reading/changing text inside elements (like <p>, <h1>, <div>)
//       Use .innerText when you're working with text elements
// .value
//    Reading/changing form inputs (like <input>, <textarea>, <select>)
//     Use .value  when you're working with input fields

