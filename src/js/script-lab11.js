const products = [
    { name: "Quran", category: "Books", price: 20 },
    { name: "Prayer Mat", category: "Accessories", price: 15 },
    { name: "Miswak", category: "Accessories", price: 3 },
    { name: "Islamic Book", category: "Books", price: 10 },
    { name: "Tasbeeh", category: "Accessories", price: 5 }
];

const productList = document.querySelector('#productList');

displayProducts(products);

function displayProducts(products) {
    productList.innerHTML = ''; // clears the product list first
    const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    for (const product of sortedProducts) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.textContent = product.name;
        p.textContent = `Category: ${product.category}, Price: RM${product.price}`;
        li.appendChild(h3);
        li.appendChild(p);
        li.className = 'product';
        productList.appendChild(li);
    }
}

const filterCategory = document.querySelector('#filterCategory');

filterCategory.addEventListener("change", updateProductList);

//filterCategory.addEventListener("change", () => {
//    const selectedCategory = filterCategory.value;
//    const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);
//    displayProducts(filteredProducts);
//});

const searchBox = document.querySelector('#searchBox');

searchBox.addEventListener("input", updateProductList);

function updateProductList() {
    const filteredProducts = products.filter(product => {
        const searchValue = searchBox.value.toLowerCase();
        const selectedCategory = filterCategory.value;
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().search(searchValue) !== -1;
        return matchesCategory && matchesSearch;
    })

    if (filteredProducts.length === 0) {
        productList.textContent = "No products found.";
    } else {
        displayProducts(filteredProducts);
    }
}

//searchBox.addEventListener("input", () => {
//    const searchValue = searchBox.value.toLowerCase();
//    const filteredProducts = products.filter(product => product.name.toLowerCase().search(searchValue) !== -1);
//    displayProducts(filteredProducts);
//});