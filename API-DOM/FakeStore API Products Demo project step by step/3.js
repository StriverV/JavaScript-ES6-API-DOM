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
           <p>${product.description}</p>
           <button> Details </button>
           <button> Add to cart </button>
        `;

        productContainer.appendChild(div);
    });

};


loadAllProduct()