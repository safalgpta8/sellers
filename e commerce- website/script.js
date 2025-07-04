const products = [
  {
    id: 1,
    name: "mens wear",
    price: 299,
    image: "https://via.placeholder.com/300x200?text=Smartphone"
  },
  {
    id: 2,
    name: "kids wear",
    price: 89,
    image: "https://via.placeholder.com/300x200?text=Shoes"
  },
  {
    id: 3,
    name: "formals",
    price: 49,
    image: "https://via.placeholder.com/300x200?text=Backpack"
  },
  {
    id: 4,
    name: "ladies wear",
    price: 129,
    image: "https://via.placeholder.com/300x200?text=Headphones"
  }
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();
