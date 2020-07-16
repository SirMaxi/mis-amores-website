import React, { useContext } from "react";
import UserContext from '../../context/UserContext';


export default function Footer() {

    const { userData } = useContext(UserContext);

    return (
                <div>
                    {userData.user ? (
                        <>
                        </>
                    ) : (
                        <>
                    <footer className="footer bg-dark">
                        <div className="container text-white">
                        <br />
                            <div className="row">
                                <div className="col-md-6 mt-md-0 mt-3">
                                    <h5 className="text-uppercase">Mis Amores</h5>
                                    <p>
                                    Descripcion de la pagina. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore odit magni dolores quae natus hic
                                    non, officiis magnam eveniet doloribus labore voluptatem. Quae
                                    commodi at, ad magni pariatur perspiciatis! Culpa.
                                    </p>
                                </div>
                                <hr className="clearfix w-100 d-md-none pb-3" />
                                    <div className="col-md-6 mt-md-0 mt-3">
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
                    </footer>
                    </>
                    )}
                </div>
  )
}
