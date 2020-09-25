import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./style.css";

export default function Footer() {
  let location = useLocation();

  const { userData } = useContext(UserContext);
  if (location.path === "/404") {
    return null;
  }

  return (
    <div>
      {userData.user ? (
        <></>
      ) : (
        <>
          <footer className="footer">
            <div className="layout text-white pt-3 px-5">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={require("../../imageLogo/LetraLogoMama.png")}
                    width="250"
                    height="250"
                    alt=""
                  ></img>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />
                <div className="col-md-6 mt-md-0 mt-3 text-center">
                  <p className="text-center mt-5">
                    Descripcion de la pagina. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Inventore odit magni dolores
                    quae natus hic non, officiis magnam eveniet doloribus labore
                    voluptatem. Quae commodi at, ad magni pariatur perspiciatis!
                    Culpa.
                  </p>
                  <a
                    onClick={() => useHistory.push("/register")}
                    className="nav-link"
                    href="/login"
                    style={{ color: "#ffff" }}
                  >
                    Login
                  </a>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />
                <div className="col-md-3 mt-5 text-center">
                  <h5 className="text-uppercase">Seguinos en nuestras redes</h5>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fab fa-facebook-square"></i>
                    </li>
                    <li>
                      <i className="fab fa-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center py-3 text-white">
              © 2020 Copyright: Los Amores de la Tia Jenny
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
