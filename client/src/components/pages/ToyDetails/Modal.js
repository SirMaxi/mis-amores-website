import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container text-center">
        {props.children}
        <br />
        <button
          className="btn btn-primary Modal__close-button"
          onClick={props.onClose}
        >
          Entendido
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
