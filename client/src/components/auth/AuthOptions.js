import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./style.css";
//useHistory es una funcion de react-dom, que nos deja interactuar con el history
//history es todo lo que paso o va a pasar en la barra de la URL (podemos usar history para cambiar la URL)

export default function AuthOptions() {
  //Usamos el useContext para llamar y destructurar el userData de la constante App de App.js
  //Lo podes ver en la seccion Components de la pagina web con F12
  const { userData, setUserData } = useContext(UserContext);

  const toys = JSON.parse(window.localStorage.getItem("cart"));
  let cartCounter = 0;

  for (var i = 0; i < toys.length; i++) {
    cartCounter++;
  }

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    //Si hay un usuario logeado, mostramos el boton de logout, si no hay usuario logeado mostramos el boton de login
    <nav className="navbar navbar-expand-lg">
      {userData.user ? (
        <>
          <li className="nav-item active">
            <a className="nav-link" href="/toys/create">
              Crear Muñeco
            </a>
          </li>
          <li className="nav-item active">
            <a onClick={logout} className="nav-link" href="/">
              Logout
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="/toys/list"
              style={{ color: "#ffff" }}
            >
              Muñecos
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact" style={{ color: "#ffff" }}>
              Contacto
            </a>
          </li>
          <li className="nav-item active">
            <div className="Basket">
              <a
                className="fas fa-shopping-cart fa-2x"
                data-count={cartCounter}
                href="/toys/checkout"
                id="cart"
                style={{ color: "#ffff" }}
              >
                {" "}
              </a>
            </div>
          </li>
        </>
      )}
    </nav>
  );
}
