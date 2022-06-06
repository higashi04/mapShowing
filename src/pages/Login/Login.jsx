import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FaSignInAlt} from 'react-icons/fa'
// import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  const onSubmit = (e) => {
    e.preventDefault();
    alert(password);
  };

  return (
    <>
      <h1 className="offset-md-3 mb-5">
        <FaSignInAlt/> Iniciar Sesión
      </h1>
      <section>
      <div className="container contact-box">
      <form onSubmit={onSubmit}>
          <div className="form-floating pb-2 contact-input">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating pb-2 contact-input">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>
        </form>
      </div>
      {email} {password}
      </section>
    </>
  );
};

export default Login;
