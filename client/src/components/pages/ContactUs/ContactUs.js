import React, { Component } from "react";
import "./style.css";
import emailjs from "emailjs-com";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <ImageCover />
          <Form />
        </div>
      </div>
    );
  }
}

function ImageCover() {
  return (
    <section className="row align-items-center" id="ImageCover">
      <div className="text-center">
        <img src={require("../../../imageLogo/LogoMama.png")} alt="" />
        <h1>Que clase de muñeco quieres?</h1>
        <br />
        <h3 className="mb-3">
          Llena el siguiente formulario para que nos pongamos en contacto y
          diseñemos el muñeco!
        </h3>
      </div>
    </section>
  );
}

function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_pqnvuax",
        e.target,
        "user_0YzxwW3hd1N0v4RiJIKpR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Email enviado exitosamente! Nos pondremos en contacto lo mas pronto posible!"
    );
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail} id="form">
          <div className="mb-5 col-8 mx-auto">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              name="name"
            />
          </div>
          <div className="mb-3 col-8 mx-auto">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email@ejemplo.com"
            />
          </div>
          <div className="row mb-5 col-8 mx-auto">
            <div className="col-6 pr-1 pl-0">
              <label htmlFor="typeToy">Tipo de Muñeco</label>
              <select className="custom-select" name="type">
                <option value>Elija un tipo de Muñeco...</option>
                <option>Dibujos Animados</option>
                <option>Mascota</option>
                <option>Persona</option>
              </select>
            </div>
            <div className="col-6 pl-1 pr-0">
              <label htmlFor="size">Tamaño</label>
              <select className="custom-select" name="size">
                <option>20 cm</option>
                <option>30 cm</option>
                <option>40 cm</option>
              </select>
            </div>
          </div>
          <div className="mb-3 col-8 mx-auto">
            <label htmlFor="description">
              Danos una breve descripcion del muñeco que quieres
            </label>
            <textarea
              className="form-control"
              cols="30"
              rows="8"
              name="description"
              placeholder="Danos detalles como el nombre del personaje que quieres o si es sobre una persona, comentanoslo y cuando te respondamos adjuntanos una foto."
            ></textarea>
          </div>
          <div className="mb-3 col-2 mx-auto">
            <input
              type="submit"
              className="btn btn-primary"
              value="Enviar"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
