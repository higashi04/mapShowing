import React, {useEffect} from "react";
import "./Error404.css";
const Error404 = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#669BC7";
      });
  return (
    <div className="error">
      <div className="error-box">
        <h1 className="error-head">Error 404</h1>
        <p className="error-text">El sitio que busca no existe</p>
      </div>
    </div>
  );
};

export default Error404;
