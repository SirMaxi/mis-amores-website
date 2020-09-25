import React from "react";
import { useLocation } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import "./style.css";

export default function Header() {
  let location = useLocation();

  if (location.pathname === "/404") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <a className="navbar-brand p-0 m-0" href="/">
        <img
          src={require("../../imageLogo/LogoMama.png")}
          alt=""
          loading="lazy"
          className="d-inline-block align-to"
          id="logo"
        />
        <img
          src={require("../../imageLogo/LetraLogoMama.png")}
          alt=""
          loading="lazy"
          className="d-inline-block align-to"
          id="letras"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto mr-4">
          <AuthOptions />
        </ul>
      </div>
    </nav>
  );
}
