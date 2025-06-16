

const loadAllProduct = () =>
{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => displayProduct(data))
    .catch(err => console.log("Error fetching products:", err));
}

const displayProduct = (products) =>
{
    const productContainer = document.getElementById("product-container");
      
      products.forEach(product => {
        console.log(products);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML =
        `
           <img class="card-img" src=${product.image} alt=""/>
           <h5>${product.title.slice(0,50)}</h5>
           <h3>price: ${product.price},</h3>
           <p>${product.description.slice(0,50)}</p>
           <button onclick="singleProduct(${product.id})" > Details </button>

           <button onclick="handleAddToCart('${product.title.slice(0,12)}',  ${product?.price})"> Add to cart </button>
        `;

        productContainer.appendChild(div);
    });

};



const handleAddToCart = (name, price) =>
{
    const cartCount = document.getElementById("count").innerText; 

    let convertedCount = parseInt(cartCount);
    convertedCount = convertedCount + 1;
    document.getElementById("count").innerText = convertedCount; 

    console.log(convertedCount);

    // console.log(name, price);
    const container = document.getElementById("cart-main-container");
    console.log(name, price);

    
    const div = document.createElement("div");
    // div.classList.add("cart-info")

    div.innerHTML =
    `
        <p>${name.slice(0, 15)}</p>
        <h3 class="price" > ${price} </h3>
    `
    container.appendChild(div);
    UpdateTotal();
}
 
const UpdateTotal = () =>
{
    const allPrice = document.getElementsByClassName("price");
    
    let count = 0;
    for (const i of allPrice) {

        count += parseFloat(i.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
};

loadAllProduct();

const singleProduct = (id) =>


{
    console.log(id);
    fetch('https://fakestoreapi.com/products/1') //hardcoded ID,Static
    fetch(`https://fakestoreapi.com/products/${id}`)// dynamic id 
   .then(response => response.json())
   .then(data => console.log(data));
}




//hardcoded ID:
//Hardcoded = fix ID
// it always fetches product ID 1

// dynamic id:
//  API call per producct,
//  it fetches the product based on the button clicked.
// template literal with backticks 

