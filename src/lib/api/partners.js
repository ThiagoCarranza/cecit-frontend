/*
  partners.js
  Fuente de datos para socios.

  Por ahora devuelve mocks locales desde lib/data/partners.js.
  Mas adelante puede cambiar a: return apiGet('/partners');
*/

import { partners } from '$lib/data/partners';

export function getPartners() {
  return partners;
}
