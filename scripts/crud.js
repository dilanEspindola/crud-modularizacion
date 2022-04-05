export async function obtenerProductos(UrlApi) {
  const res = await axios.get(UrlApi);
  const data = await res.data;
  mostrarProductos(data);
  agregarProducto(UrlApi);
  editarProducto(data, UrlApi);
  eliminarProducto(UrlApi);
  return data;
}

function agregarProducto(url) {
  const formAdd = document.getElementById("formAdd");
  formAdd.addEventListener("submit", async (e) => {
    e.preventDefault();

    const product = {
      nombre: document.getElementById("nombre").value,
      presentacion: document.getElementById("presentacion").value,
      cantidad: document.getElementById("cantidad").value,
      categoriaId: document.getElementById("categoriaId").value,
      imagen: document.getElementById("imagen").value,
    };

    try {
      await axios.post(url, product);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  });
}

export function mostrarProductos(productos) {
  const grid = document.getElementById("main");
  grid.innerHTML += "";

  const products = productos.map((product) => {
    return `
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
                    class="btn btn-sm btn-success editar"
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
  });
  grid.innerHTML = products;
}

function editarProducto(data, url) {
  const main = document.querySelector("#main");
  main.addEventListener("click", (e) => {
    const id = e.target.id;
    enviarProductoEditado(id);

    const getSingleProduct = data.find((product) => product.id == id);
    const inputs = document.querySelectorAll("#formAdd input");
    inputs.forEach((input) => {
      input.value = getSingleProduct[input.name];
    });
  });

  async function enviarProductoEditado(id) {
    document.getElementById("btnEditar").addEventListener("click", async () => {
      const updateProduct = {
        nombre: document.getElementById("nombre").value,
        presentacion: document.getElementById("presentacion").value,
        cantidad: document.getElementById("cantidad").value,
        categoriaId: document.getElementById("categoriaId").value,
        imagen: document.getElementById("imagen").value,
      };

      try {
        await axios.put(`${url}${id}`, updateProduct);
        location.reload();
        console.log("producto actualizado");
      } catch (error) {
        console.log(error);
      }
    });
  }
}

function eliminarProducto(url) {
  const main = document.querySelector("#main");
  main.addEventListener("click", async (e) => {
    const id = e.target.id;
    // delete product
    try {
      await axios.delete(`${url}${id}`);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  });
}
