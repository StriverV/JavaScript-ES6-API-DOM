// alert()

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
           <button> Details </button>
           <button onclick="handleAddToCart('${product.title.slice(0,12)}',  ${product?.price})"> Add to cart </button>
        `;

        productContainer.appendChild(div);
    });

};


const handleAddToCart = (name, price) =>
{
    // console.log(name, price);
    const container = document.getElementById("cart-main-container");
    console.log(name, price);

    
    const div = document.createElement("div");
    // div.classList.add("cart-info")

    div.innerHTML =
    `
        <p>${name.slice(0, 15)}</p>
        <h3> ${price} </h3>
    `
    container.appendChild(div);

}


loadAllProduct();