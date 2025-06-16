const loadAllProduct = () =>
{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => displayProduct(data))
    .catch(err => console.log("Error fetching products:", err));
}

loadAllProduct()