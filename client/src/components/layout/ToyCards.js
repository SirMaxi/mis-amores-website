import React from "react";
import "../../style.css";
import AdminOptions from "../auth/AdminOptions";
import { Link } from "react-router-dom";

export default function ProductCards({ toys }) {
  const renderCards = toys.map((toy, index) => {
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
  });

  return (
    <div className="container mt-0">
      <div className="row">{renderCards}</div>
    </div>
  );
}
