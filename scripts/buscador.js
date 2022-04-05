import { mostrarProductos } from "./crud.js";

export async function buscador(url) {
  document.getElementById("search").addEventListener("keyup", async (e) => {
    const { data } = await axios.get(url);
    const buscarNombre = e.target.value.toLowerCase();
    const grid = document.getElementById("main");
    grid.innerHTML = "";

    data.forEach((product) => {
      if (product.nombre.toLowerCase().includes(buscarNombre)) {
        grid.innerHTML += `
        <div class="col-12 col-md-2 col-lg-3">
        <div class="card mb-4 shadow-sm">
          <img
            src="${product.imagen}"
            alt="${product.nombre}"
            class="card-img-top"
          >
          <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.cantidad}</p>
            <p class="card-text">${product.presentacion}</p>
            <div class="d-flex justify-content-end align-items-center">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-success"
                  id=${product.id}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Editar
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  id=${product.id}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
      }
    });
  });
}
