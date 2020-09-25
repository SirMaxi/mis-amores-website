import React from "react";
import "./style.css";
import emailjs from "emailjs-com";

function ClientSubmit({ data }) {
  let toysNames = [];
  for (var i = 0; i < data.length; i++) {
    toysNames.push(data[i].titulo);
  }

  let toysList = toysNames.toString();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "Gmail",
        "template_hb3lszx",
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
      <h3 id="second_title">Solicitar Cotizacion de estos productos</h3>
      <form onSubmit={sendEmail}>
        <div className="col-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@ejemplo.com"
          />
        </div>
        <div>
          <input type="hidden" defaultValue={toysList} name="description" />
        </div>
        <div className="mb-3 col-2 ">
          <input
            type="submit"
            className="btn btn-primary"
            value="Enviar"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ClientSubmit;
