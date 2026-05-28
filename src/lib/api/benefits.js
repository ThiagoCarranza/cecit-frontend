/*
  benefits.js
  Fuente de datos para beneficios.

  Por ahora devuelve mocks locales desde lib/data/benefits.js.
  Mas adelante puede cambiar a: return apiGet('/benefits');
*/

import { benefits } from '$lib/data/benefits';

export function getBenefits() {
  return benefits;
}
