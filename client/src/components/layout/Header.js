import React from 'react';
import AuthOptions from '../auth/AuthOptions';
import "../../style.css";


export default function Header() {

  return (
    <nav className="layout navbar navbar-expand-lg py-0">
        <img src={ require('../../imageLogo/ProyectoLogoMama.jpg') } width="60" alt="" loading="lazy" className="mr-3"/>
        <a className="navbar-brand py-0" href="/">
          Los amores de la tia Jenny
        </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-4">
            <AuthOptions />
          </ul>        
        </div>
    </nav>
    )
  }

