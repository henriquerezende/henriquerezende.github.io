export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((categoriesList) => categoriesList.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((products) => products.json());
}

export async function getProductsSorted(categoryId, query, sort) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}&sort=${sort}`)
    .then((products) => products.json());
}
