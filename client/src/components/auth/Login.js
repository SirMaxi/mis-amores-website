import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        const loginUser = { email, password };
        const loginRes = await Axios.post(
            'http://localhost:5000/users/login',
            loginUser
        );

        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });

        localStorage.setItem('auth-token', loginRes.data.token);
        history.push('/');
    };

    return (
        <div>
            <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={submit}>
              <h1 className="h3 mb-3 font-weight-normal">Ingresa como Admin</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Ingresa el email"
                  id="login-email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                  id="login-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                value="Login"
              >
                Iniciar Sesion
              </button>
            </form>
          </div>
        </div>
        </div>
    )
}
