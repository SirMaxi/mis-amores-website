import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="text-center">
        <img src={require("../../imageLogo/404.svg")} alt="" id="image404" />
        <Link to="/" className="btn btn-warning mb-4">
          Volver al inicio
        </Link>
        <br />
      </div>
      <a href="https://stories.freepik.com/web">
        Illustration by Freepik Stories
      </a>
    </>
  );
}
