/*
  client.js
  Punto central para llamadas al backend.

  Hoy no se usa fetch porque el backend todavia no esta listo.
  Cuando exista la API, la idea es llamar desde aca para no tocar los componentes.
*/

export const API_BASE_URL = 'http://localhost:3000';

/**
 * @param {string} path
 */
export async function apiGet(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al pedir ${path}`);
  }

  return response.json();
}
