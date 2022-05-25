import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import bg from '../../assets/277818637_128486116428810_4633483802542049870_n.jpg'

const Body = () => {

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`
  })
  
  return (
    <div className="links">
      <Link className="btn anchorBtn mx-3" to="contacto">
        {" "}
        Contacto{" "}
      </Link>
      <Link className="btn anchorBtn mx-3" to="about">
        {" "}
        Quiénes Somos{" "}
      </Link>
    </div>
  );
};

export default Body;
