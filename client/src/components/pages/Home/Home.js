import React, { Component } from "react";
import "./style.css";
import Axios from "axios";
import DemoToys from "./DemoToys";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: undefined,
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    await Axios.post("http://localhost:5000/toys/getToysPost")
      .then((response) => {
        this.setState({ toys: response.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  };

  render() {
    if (this.state.loading) {
      return <p>Cargando...</p>;
    }

    if (this.state.error) {
      return <p>Error</p>;
    }

    return (
      <div className="bg-light">
        <ImageCover />
        <DescriptionHome name="maxi" />
        <DemoToys toys={this.state.toys} />
      </div>
    );
  }
}

function ImageCover() {
  return (
    <div className="Intro">
      <img
        src={require("../../../imageLogo/intro.jpg")}
        className="imgIntro"
        alt=""
      />
      <div className="row ImageTitle">
        <div className="col-10 ">Mas de 100 amores para elegir o crear</div>
      </div>
    </div>
  );
}

function DescriptionHome() {
  return (
    <div className="container bg-light">
      <div className="Description1">
        <div className="ImageDescription1 mt-5">
          <img
            src={require("../../../imageLogo/toys.jpeg")}
            alt=""
            id="imageToys"
          />
          <div className="CardDescription1">
            <div className="card border-0 text-center">
              <div className="card-body">
                <h2 className="card-title">
                  Elegi entre una gran variedad de muñecos
                </h2>
                <p className="card-text">
                  Contamos con mas de 100 muñecos para que elijas el que te
                  gusta.
                </p>
                <a href="/toys/list" className="btn btn-info" role="button">
                  Ver Muñecos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="Description">
        <div className="ImageDescription2 mt-5">
          <img
            src={require("../../../imageLogo/telas2.jpg")}
            alt=""
            id="imageToys"
          />
          <div className="CardDescription2">
            <div className="card border-0 text-center">
              <div className="card-body">
                <h2 className="card-title">Muñecos Personalizados</h2>
                <p className="card-text">
                  No encontras el muñeco que precisas? La tia Jenny lo hace por
                  vos!. Llena un breve formulario y nosotros nos estaremos
                  contactando para pasarte una cotizacion y fecha de entrega.
                </p>
                <a href="/toys/list" className="btn btn-info" role="button">
                  Ver Muñecos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />
    </div>
  );
}
