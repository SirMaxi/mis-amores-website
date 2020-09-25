//Main react component
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context/UserContext";
import Axios from "axios";
import Home from "./components/pages/Home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import UploadToy from "./components/pages/UploadToy/UploadToy";
import EditToy from "./components/pages/EditToy/EditToy";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import ToysPage from "./components/pages/ToysPage/ToysPage";
import ToyDetails from "./components/pages/ToyDetails/ToyDetailsContainer";
import NotFound from "./components/notFound/NotFound";
import Checkout from "./components/pages/Checkout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  //Con useEffect tenemos control sobre lo que pasa afuera de el componente ppal
  useEffect(() => {
    //Como useEffect no es asincrono, tenemos que crear adentro de useEffect una funcion que si lo sea
    const checkLoggedIn = async () => {
      //Agarramos el token desde el localStorage de la pagina
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      //Usamos axios para guardar la respuesta del token que nos da el post de users/tokenIsValid, null es el body y lo que sigue es el header(x-auth-token)
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        //Si hay un token entonces usamos el token para agarrar la data del usuario loggeado
        //En el Axios como es una peticios GET no hace falta que ponga la parte del body
        const userRes = await Axios.get("http://localhost:5000/users", {
          headers: { "x-auth-token": token },
        });
        //Ahora le damos los valores a setUserData que conseguimos
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    //BrowserRouter este va a ser el root component de la pagina web
    //UserContext Un componente que llama a useContext siempre se volverá a renderizar cuando el valor del contexto cambie
    //Switch para tener acceso a checkear la URL
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/toys/create" component={UploadToy} />
          <Route exact path="/toys/edit" component={EditToy} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/toys/list" component={ToysPage} />
          <Route exact path="/toys/toy/:id" component={ToyDetails} />
          <Route exact path="/toys/checkout" component={Checkout} />
          <Route exact path="/404" component={NotFound} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
