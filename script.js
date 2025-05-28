const productGrid = document.getElementById('products');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.description.substring(0, 100)}...</p>
        <div class="price">$${product.price}</div>
      `;
      productGrid.appendChild(div);
    });
  })
  .catch(error => {
    productGrid.innerHTML = '<p>Failed to load products.</p>';
    console.error(error);
  });
