/*
  categories.js
  Fuente de datos para categorias.

  Por ahora devuelve mocks locales desde lib/data/categories.js.
  Mas adelante puede cambiar a: return apiGet('/categories');
*/

import { categories } from '$lib/data/categories';

export function getCategories() {
  return categories;
}
