import React, { useEffect } from "react";

import "./About.css";
import TextContainer from "../../components/TextContainer/TextContainer";

const About = () => {
  const mission =
    "Proveemos servicios integrales a la medida de nuestros clientes, operado por personal capacitado en la materia, respaldado con un excelente servicio basado en la calidad.";
  const infoText =
    "Transporte Villarreal se compromete en implementar, mantener y mejorar continuamente un sistema y control de Seguridad de la Información, con la finalidad de  identificar los riesgos inherentes al manejo y uso de los activos de información propios y de terceros que intervienen en sus servicios.";
  const vision =
    "Ser un operador de transporte de personal reconocido por un excelente servicio de calidad y con innovación; expertos que proveen soluciones a sus clientes, respetando al medio ambiente.";
  const qaPol =
    "Transporte Villarreal se compromete en satisfacer y superar las expectativas de sus clientes, otorgando un servicio integral basado en la calidad, con la mentalidad fija hacia la mejora continua.";

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });

  return (
    <div className="py-5">
      <h1 className="aboutH1">Quiénes Somos</h1>
      <TextContainer title="MISIÓN" text={mission} />
      <TextContainer title="VISIÓN" text={vision} />
      <TextContainer
        title="POLÍTICA DE SEGURIDAD DE LA INFORMACIÓN"
        text={infoText}
      />
      <TextContainer title="POLÍTICA DE CALIDAD" text={qaPol} />
    </div>
  );
};

export default About;
