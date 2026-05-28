# Mapa del proyecto

Este archivo es una guia rapida para saber donde esta cada cosa.

## Rutas principales

- `routes/+page.svelte`: home principal que se ve en `/`.
- `routes/home/+page.svelte`: otra version de home en `/home`.
- `routes/benefits/+page.svelte`: pagina de todos los beneficios.
- `routes/login/+page.svelte`: pagina de login.
- `routes/+layout.svelte`: estructura global; monta `Navbar`, contenido y `Footer`.

Cada ruta tiene su CSS al lado:

- `routes/layout.css`
- `routes/home/page.css`
- `routes/benefits/page.css`
- `routes/login/page.css`

## Componentes

Los componentes estan separados por responsabilidad:

- `lib/components/layout/`
  - `Navbar.svelte`: barra superior.
  - `Navbar.css`: estilos de la barra superior.
  - `Footer.svelte`: pie de pagina.
  - `Footer.css`: estilos del pie.

- `lib/components/home/`
  - `HeroCarousel.svelte`: banner principal y buscador.
  - `HeroCarousel.css`: estilos del banner/buscador.
  - `Categories.svelte`: carrusel de categorias.
  - `Categories.css`: estilos del carrusel de categorias.
  - `BenefitsSection.svelte`: carrusel de beneficios de la home.
  - `BenefitsSection.css`: estilos de filtros, flechas y carrusel.
  - `PartnersCarousel.svelte`: carrusel de socios.
  - `PartnersCarousel.css`: estilos del carrusel de socios.
  - `JoinSection.svelte`: bloque "Hacete socio".
  - `JoinSection.css`: estilos del bloque "Hacete socio".

- `lib/components/benefits/`
  - `BenefitCard.svelte`: tarjeta individual de beneficio.
  - `BenefitCard.css`: estilos de la tarjeta y su version mobile.

## Datos mock

Estos archivos tienen datos falsos/locales para poder armar la pantalla:

- `lib/data/benefits.js`
- `lib/data/categories.js`
- `lib/data/partners.js`

Si queres cambiar textos, imagenes o categorias por ahora, podes tocar esos archivos.

## Capa preparada para backend

Estos archivos son el lugar correcto para conectar el backend mas adelante:

- `lib/api/client.js`: configuracion general de API.
- `lib/api/benefits.js`: de donde salen los beneficios.
- `lib/api/categories.js`: de donde salen las categorias.
- `lib/api/partners.js`: de donde salen los socios.

Ahora mismo `lib/api/*` devuelve los mocks desde `lib/data/*`.
Cuando el backend este listo, se cambia ahi para usar `fetch`, sin tocar los componentes visuales.

## Regla simple para modificar

- Si queres cambiar **estructura o contenido visible**, busca el `.svelte`.
- Si queres cambiar **colores, tamanos, espacios o responsive**, busca el `.css` con el mismo nombre.
- Si queres cambiar **datos temporales**, busca `lib/data`.
- Si queres conectar **backend**, busca `lib/api`.
