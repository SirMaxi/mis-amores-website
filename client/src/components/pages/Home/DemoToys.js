import React from "react";
import "../../layout/style.css";
import AdminOptions from "../../auth/AdminOptions";
import { Link } from "react-router-dom";

function DemoToys({ toys }) {
  const renderCardsExample = toys.map((toy, index) => {
    if (index < 3) {
      return (
        <div className="col-md-4" key={index}>
          <div className="card border-light mb-4">
            <div className="embed-responsive embed-responsive-4by3">
              <div className="inner">
                <img
                  alt=""
                  className="card-img-top embed-responsive-item"
                  src={`http://localhost:5000/${toy.imagenes}`}
                />
              </div>
            </div>
            <div className="text-center shadow">
              <h5 className="card-title">{toy.titulo}</h5>
              <p className="card-text">$ {toy.precio}</p>
              <p>{toy.categoria}</p>
              <div className="mb-3">
                <Link
                  className="btn btn-outline-info"
                  to={`/toys/toy/${toy._id}`}
                >
                  Ver Mas &nbsp;
                  <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>

              <AdminOptions value={toy} />
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="text-center">
        <h1>Algunos Muñecos</h1>
      </div>
      <br />
      <div className="container mt-0">
        <div className="row">{renderCardsExample}</div>
      </div>
      <div className="text-center">
        <a
          href="/toys/list"
          className="btn btn-outline-info mb-5"
          role="button"
        >
          Ver Mas Muñecos
        </a>
      </div>
    </div>
  );
}

export default DemoToys;
