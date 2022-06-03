import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });

  return (
    <>
      <h1>Iniciar Sesión</h1>
    </>
  );
};

export default Login;
