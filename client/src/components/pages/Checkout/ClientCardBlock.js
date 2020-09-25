import React from "react";

function ClientCardBlock({ data }) {
  const deleteToy = (toyId) => {
    let newLocal = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i]._id === toyId) {
        data.splice(i, 1);
        break;
      }
    }
    for (var j = 0; j < data.length; j++) {
      newLocal.push(data[j]._id);
    }
    window.localStorage.setItem("cart", JSON.stringify(newLocal));
    window.location.reload();
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Imagen producto</th>
            <th style={{ width: "30%" }}>Producto</th>
            <th style={{ width: "20%" }}>Precio</th>
            <th style={{ width: "30%" }}>Remover del carrito</th>
          </tr>
        </thead>
        <thead>
          {data.map((toy, key) => (
            <tr key={key}>
              <th>
                <img
                  alt=""
                  className="card-img-top embed-responsive-item"
                  src={`http://localhost:5000/${toy.imagenes}`}
                  style={{ width: "80px", height: "80px" }}
                />
              </th>
              <th className="align-middle">{toy.titulo}</th>
              <th className="align-middle">$ {toy.precio}</th>
              <th className="align-middle">
                <button
                  onClick={() => deleteToy(toy._id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </th>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default ClientCardBlock;
