<a href="https://gersilva-mercadolibre-frontend-challenge.vercel.app/" target="_blank">
	<img src="https://raw.githubusercontent.com/gersilva96/mercadolibre-frontend-challenge/main/public/logos/mercado-libre-text.svg" alt="Mercado Libre - Frontend Challenge" width="400"/>
</a>

# Mercado Libre - Frontend Challenge

El objetivo del challenge es realizar una pequeña aplicación funcional en la que se pueda buscar productos, listarlos en base a la búsqueda y poder acceder al detalle de cada uno de ellos. Dada la libertad para poder agregar detalles, se modificaron un poco los estilos para que queden similares a la web actual de Mercado Libre y se agregaron algunos detalles para que quede la aplicación luzca más completa.

## Pantallas

La aplicación cuenta con 3 pantallas, como indican los requerimientos. Las mismas son:
- Inicio (buscador):
	- Requeridos: posee un header con un input de búsqueda (disponible en todas las pantallas).
	- Extras: se le agregaron detalles a la home principalmente para que no quede vacía, haciéndola parecer a la home de Mercado Libre, además de un footer.
- Resultados de búsqueda:
	- Requeridos: listado de resultados de búsqueda (limitada a 4 resultados, como indica el requerimiento).
	- Extras: se reemplazó el breadcrumb del diseño original por el título con la búsqueda actual, como muestra la pantalla de resultados de búsqueda de Mercado Libre, además también cuenta con una paginación para poder navegar por las distintas páginas de resultados.
- Detalle de producto:
	- Requeridos: detalle de producto indicando condición, cantidad de productos vendidos (en caso de ser nuevo), precio, botones de comprar y agregar al carrito, descripción.
	- Extras: el breadcrumb con las categorías se hizo navegable, haciendo que cada categoría redirija a la pantalla de búsqueda, filtrando los productos por la categoría clickeada.
- Pantallas extra:
	- Se agregó una pantalla en caso de no haber resultados de búsqueda
	- También una pantalla de código de respuesta 404

## API

La api desarrollada cuenta con 3 endpoints:
- GET /api/items - listado de items, consulta el endpoint de búsqueda de Mercado Libre, con los posibles query params:
	- q: texto de búsqueda
	- category: id de categoría
	- offset: offset para paginación
  - limit: límite de resultados
- GET /api/items/:id - item específico, consulta el endpoint de items de Mercado Libre
- GET /api/categories/:id - categoría específica, consulta el endpoint de categorías de Mercado Libre

## Tecnologías utilizadas

- React.js, con Next.js como framework, utilizándolo con Server Side Rendering para vistas dinámicas y Static Generation para vistas no dinámicas.
- Redux para el estado, con ayuda de Redux Toolkit.
- Next.js (con Node.js y Express.js por detrás) para las rutas de la api.
- TypeScript para controlar el tipado en toda la aplicación
- Sass para el estilado de los componentes, con ayuda de Chakra UI para ciertas partes de la aplicación, como botones y breadcrumbs.
- Jest con React Testing Library para los tests de los componentes.
- ESLint y StyleLint como linters de código.
- Prettier como formateador.
- NextSeo para simplificaciones de SEO.
- i18next para la internacionalización de los textos.

## Deploy

Deploy realizado en Vercel, disponible en el siguiente link: [Mercado Libre - Frontend Challenge](https://gersilva-mercadolibre-frontend-challenge.vercel.app/)

## Entorno local

Para poder levantar el proyecto en un entorno local, es necesario tener instalado Node.js, solamente se debe ejecutar alguno de los siguientes comandos en la raiz del proyecto:

``npm run complete:start``

``yarn complete:start``

## Posibles mejoras

- Sería mucho más eficiente tener la api en un servidor aparte desarrollado en Node.js con Express.js, por temas de tiempos y practicidad se aprovecharon las api routes de Next.js. Acorde a la documentación de Next.js, el problema es que al usar Server Side Rendering, los request a la api propia que se realizan en getServerSideProps y los mismos requests que realiza la api propia a la api de Mercado Libre, se realizan en el mismo servidor, provocando que el tiempo de renderizado sea mayor. Una solución podría ser no utilizar Server Side Rendering, pero de esta forma no se podrían ocultar los endpoints de la api. La mejor solución sería tener servidor de la api propia y servidor del frontend en servicios separados.
- De haberse desarrollado los servicios por separado, se podría usar una arquitectura monorepo para facilitar el desarrollo del proyecto, debido a que ambos estarían desarrollados en el mismo lenguaje, pudiendo aprovechar hearramientas como Lerna y Yarn Workspaces.
- Se deberían crear más tests para los componentes, corroborar que se rendericen correctamente con el contenido y estilos correspondientes y para los endpoints de la api.
- Sería más prolijo el estilado de los componentes armando más mixines para simplificar el código y lograr una mayor reutilización, también una posible migración a JSS dada la facilidad de intercambiar datos entre componente y estilado.
- Ideal más optimizaciones para mejorar SEO, accesibilidad y performance, basándose principalmente en las Core Web Vitals y demás métricas que ofrece Lighthouse.
- Se podría agregar, en el detalle de producto, el soporte para poder mostrar más de una sola imagen para los mismos.
