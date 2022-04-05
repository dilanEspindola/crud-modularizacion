export async function filtrarCerveza(filtrarCerveza) {
  const { data } = await axios.get(filtrarCerveza);
  document.getElementById("cerveza").addEventListener("click", () => {
    const grid = document.querySelector("main");
    const products = data.map((product) => {
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
                  class="btn btn-sm btn-success"
                  onclick="updateProduct('${product.id}')"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Editar
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  onclick="deleteProduct('${product.id}')"
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
  });
}

export async function filtrarWhisky(filtrarWhisky) {
  const { data } = await axios.get(filtrarWhisky);
  document.getElementById("wiski").addEventListener("click", () => {
    const grid = document.querySelector("main");
    const products = data.map((product) => {
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
                  class="btn btn-sm btn-success"
                  onclick="updateProduct('${product.id}')"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Editar
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  onclick="deleteProduct('${product.id}')"
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
  });
}

export async function filtrarTequila(filtrarTequila) {
  const { data } = await axios.get(filtrarTequila);
  document.getElementById("tequila").addEventListener("click", () => {
    const grid = document.querySelector("main");
    const products = data.map((product) => {
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
                  class="btn btn-sm btn-success"
                  onclick="updateProduct('${product.id}')"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Editar
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  onclick="deleteProduct('${product.id}')"
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
  });
}

export async function filtrarVino(filtrarVino) {
  const { data } = await axios.get(filtrarVino);
  document.getElementById("vino").addEventListener("click", () => {
    const grid = document.querySelector("main");
    const products = data.map((product) => {
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
                  class="btn btn-sm btn-success"
                  onclick="updateProduct('${product.id}')"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Editar
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  onclick="deleteProduct('${product.id}')"
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
  });
}
