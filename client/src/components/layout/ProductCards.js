import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../../style.css";
import AdminOptions from "../auth/AdminOptions";

export default function ProductCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:5000/toys/getToysPost")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderCards = cards.map((toy, index) => {
    return (
      <div className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
          <div className="card h-100">
            <img
              src={`http://localhost:5000/${toy.imagenes}`}
              alt="productImagen"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{toy.titulo}</h5>
              <p className="card-text">{toy.descripcion}</p>
              <p className="card-text">{toy.precio}</p>
            </div>
            <div className="card-footer">
              <a href="/" className="btn btn-primary">
                Ir al producto
              </a>

              <AdminOptions value={toy}/>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{renderCards}</div>
    </div>
  );
}
