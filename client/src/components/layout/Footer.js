import React, { useContext } from "react";
import UserContext from '../../context/UserContext';
import "../../style.css";


export default function Footer() {

    const { userData } = useContext(UserContext);

    return (
                <div>
                    {userData.user ? (
                        <>
                        </>
                    ) : (
                        <>
                    <footer className="">
                        <div className="layout text-white pt-3 px-5">
                            <div className="row">
                                <div className="col-md-3">
                                        <img src={ require('../../imageLogo/ProyectoLogoMama.jpg')} width="250" height="250" alt=""></img>
                                    </div>
                                    <hr className="clearfix w-100 d-md-none pb-3" />
                                    <div className="col-md-7 mt-md-0 mt-3 text-center">
                                        <h5 className="text-uppercase">Mis Amores</h5>
                                        <p>
                                        Descripcion de la pagina. Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Inventore odit magni dolores quae natus hic
                                        non, officiis magnam eveniet doloribus labore voluptatem. Quae
                                        commodi at, ad magni pariatur perspiciatis! Culpa.
                                        </p>
                                    </div>
                                    <hr className="clearfix w-100 d-md-none pb-3" />
                                        <div className="col-md-2 mt-md-0 mt-3 text-center">
                                            <h5 className="text-uppercase">Links</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/">Facebook</a>
                                                </li>
                                                <li>
                                                    <a href="/">Instagram</a>
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
  )
}
