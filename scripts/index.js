const API = "https://backend-licores.herokuapp.com/productos/";
const API_Categoria_Cerveza =
  "https://backend-licores.herokuapp.com/categorias/1/productos";
const API_Categoria_Wiski =
  "https://backend-licores.herokuapp.com/categorias/2/productos";
const API_Categoria_Tequila =
  "https://backend-licores.herokuapp.com/categorias/3/productos";
const API_Categoria_Vinos =
  "https://backend-licores.herokuapp.com/categorias/4/productos";

import { obtenerProductos } from "./crud.js";
import {
  filtrarCerveza,
  filtrarWhisky,
  filtrarTequila,
  filtrarVino,
} from "./filtros.js";
import { buscador } from "./buscador.js";

window.addEventListener("DOMContentLoaded", async () => {
  await obtenerProductos(API);
  await filtrarCerveza(API_Categoria_Cerveza);
  await filtrarWhisky(API_Categoria_Wiski);
  await filtrarTequila(API_Categoria_Tequila);
  await filtrarVino(API_Categoria_Vinos);
  await buscador(API);
});
