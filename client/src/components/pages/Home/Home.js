import React, { Component } from 'react';
import ProductCards from '../../layout/ProductCards';
import './style.css';


export default class Home extends Component {
    render(){
        return (
            <div>
                <CarouselHome/>
                <div className="container marketing">
                    <DescriptionHome/>
                    <DemoToys/>
                    <ProductCards/>
                </div>
            </div>
        )
    }
}

function CarouselHome() {
    return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-slide-to="0" className="active"></li>
                    <li data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ require('../../../imageLogo/toys.jpeg') } className="d-block w-100" alt="" style={{width: "100%", height: "600px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Elegi entre una gran variedad de muñecos</h5>
                            <p>Mas de 100 muñecos para que eligas el que quieras</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={ require('../../../imageLogo/telas.jpg') } className="d-block w-100" alt="" style={{width: "100%", height: "600px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>No encontras tu muñeco? </h5>
                            <p>Nosotros te creamos el muñeco que necesites</p>
                        </div>
                    </div>
                </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Siguiente</span>
            </a>
            </div>
    )
}

function DescriptionHome(){
    return(
        <div>
            <div className="row featurette">
                <div className="col-md-7 text-center">
                    <h2 className="featurette-heading">
                        Elegi entre una gran variedad de muñecos
                    </h2>
                    <p className="paragraph">
                        Contamos con mas de 100 muñecos para que eligas el que te gusta.
                    </p>
                    <div className="text-center">
                        <button className="btn btn-primary">
                            Ver muñecos
                        </button>
                    </div>
                </div>
                <div>
                    <img src={ require('../../../imageLogo/toys.jpeg') } alt="" width='475' height='500' />
                </div>
            </div>
            <hr className="featurette-divider" />

            <div className="row featurette">
                <div>
                    <img src={ require('../../../imageLogo/telas.jpg') } alt="" width='475' height='500' />
                </div>
                <div className="col-md-7 text-center">
                    <h2 className="featurette-heading">
                        Muñecos Personalizados
                    </h2>
                    <p className="paragraph">
                        No encontras el muñeco que precisas? La tia Jenny lo hace por vos!. Llena un breve formulario y nosotros nos estaremos contactando para pasarte una cotizacion y fecha de entrega.
                    </p>
                    <div className="text-center">
                        <button className="btn btn-primary">
                            Contactanos
                        </button>
                    </div>
                </div>
            </div>
                <hr className="featurette-divider" />
        </div>
    )
}

function DemoToys() {
    return (
        <div className="text-center">
            <h1>Algunos Muñecos</h1>
        </div>
    )
}