const products = [
  { name: "Apple", price: 120 },
  { name: "Milk", price: 50 },
  { name: "Bread", price: 40 },
  { name: "Tomato", price: 30 }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product-card");

  div.innerHTML = `
    <h3 class="font-bold text-lg">${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="bg-green-600 text-white px-3 py-1 mt-2 rounded">
      Add to Cart
    </button>
  `;

  productList.appendChild(div);
});