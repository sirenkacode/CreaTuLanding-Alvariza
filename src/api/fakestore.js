const BASE = "https://fakestoreapi.com";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const adapt = (p) => ({
  id: String(p.id),
  name: p.title,
  price: p.price,
  img: p.image,
  category: p.category,
});

export async function fetchAllProducts() {
  const res = await fetch(`${BASE}/products`);
  const json = await res.json();
  await delay(400);
  return json.map(adapt);
}

export async function fetchProductsByCategory(categoryId) {
  const res = await fetch(`${BASE}/products/category/${encodeURIComponent(categoryId)}`);
  const json = await res.json();
  await delay(400);
  return json.map(adapt);
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE}/products/${id}`);
  const json = await res.json();
  await delay(300);
  return json ? adapt(json) : null;
}

export async function fetchCategories() {
  const res = await fetch(`${BASE}/products/categories`);
  const json = await res.json();
  await delay(200); 
  return json; 
}
