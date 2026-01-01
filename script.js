let allProducts = [];

let searchText = '';
let selectedCategory = 'all';


function applyFilters() {
    let filteredProducts = allProducts;

    if (searchText) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchText)
        );
    }

    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.category === selectedCategory
        );
    }

    renderProducts(filteredProducts);
}

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const products = await response.json();
        console.log(products);
        allProducts = products;
        populateCategories(allProducts);
        applyFilters();
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}

function renderProducts(products) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" width="100" />
            <p class="product-description">${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productCard.classList.add('product-card');
        productsContainer.appendChild(productCard);
    });

    const totalProducts = products.length;
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

    document.getElementById('totalCount').textContent = totalProducts;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

document.getElementById('searchInput').addEventListener('input', (event) => {
    searchText = event.target.value.trim().toLowerCase();  // Case-insensitive search, .trim() to remove extra spaces
    applyFilters();
});

document.getElementById('categoryFilter').addEventListener('change', (event) => {
    selectedCategory = event.target.value;
    applyFilters();
});

function populateCategories(products) {
    const categorySelect = document.getElementById('categoryFilter');
    categorySelect.innerHTML = '<option value="all">All Categories</option>';

    const categories = Array.from(  // Get unique categories, means no duplicates.
        new Set(products.map(product => product.category))  // Set only keeps unique values. new Set() creates a set from the array of categories.
    );

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

fetchProducts();