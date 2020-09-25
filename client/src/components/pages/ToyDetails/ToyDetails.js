import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function ToyDetails({ toy }) {
  const history = useHistory();
  const { imagenes, descripcion, titulo, precio } = toy.data;
  const [cart, setCart] = useState(
    window.JSON.parse(localStorage.getItem("cart"))
  );

  console.log(window.localStorage.getItem("cart"));
  const setLocalStorage = (value) => {
    try {
      //Creamos un array vacio
      let newCart = [];
      if (cart) {
        //Si ya hay algo en cart, igualamos newCart a cart
        newCart = cart;
      }
      //Metemos el id del toy en el nuevo array
      newCart.push(value);
      //Ponemos en setCart el nuevo array
      setCart(newCart);
      //Ponemos en localStorage el nuevo array
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(window.localStorage.getItem("cart"));
      alert("Producto agregado al carrito correctamente!");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="text-center my-5">
        <h1>Informacion del Muñeco</h1>
      </div>
      <div className="bg-light">
        <div className="container" id="containerSize">
          <div className="row" id="rowDisplay">
            <div className="col" id="ImageToy">
              <img
                style={{ minWidth: "500px", width: "500px", height: "500px" }}
                src={`http://localhost:5000/${imagenes}`}
                alt=""
              />
            </div>
            <div className="col" id="DescriptionToy">
              <div className="card shadow border-0 text-white" id="card">
                <div id="descriptionContainer">
                  <div id="titulo">{titulo}</div>
                  <div id="descripcion">{descripcion}</div>
                  <hr className="card-divider" />
                  <div id="precio">$ {precio}</div>

                  <button
                    onClick={() => setLocalStorage(toy.data._id)}
                    className="btn btn-outline-light"
                  >
                    <i className="fas fa-cart-plus"></i>
                    &nbsp; Agregar al carrito
                  </button>
                  <br />
                  <button
                    className="btn btn-outline-light"
                    id="back"
                    onClick={() => history.push("/toys/list")}
                  >
                    <i className="fas fa-backward"></i>
                    &nbsp; Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
