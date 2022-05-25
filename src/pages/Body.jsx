import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="links">
      <Link className="btn anchorBtn" to="contacto">
        {" "}
        Contacto{" "}
      </Link>
      <Link className="btn anchorBtn" to="about">
        {" "}
        Quiénes Somos{" "}
      </Link>
    </div>
  );
};

export default Body;
