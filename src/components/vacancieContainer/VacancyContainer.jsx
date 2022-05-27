import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

import "./VacancyContainer.css";

const VacancyContainer = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [sign, setSign] = useState(true);

  const signToggle = () => {
    setCollapse(!collapse);
    setSign(!sign);
  };

  return (
    <div className="container vacancy-container-box my-3">
      <div className="row">
        <div className="col-6">
          <h1>{props.position}</h1>
        </div>
        <div className="col-6">
          <button className="collBtn" onClick={() => signToggle()}>
            {" "}
            {sign ? "+" : "-"}{" "}
          </button>
        </div>
      </div>
      <Collapse in={collapse}>
        <div className="row">
          <div id="collapsePanel" className="vacancy-requirements">
            <ul>
              <li>Género: {props.gender}</li>
              <li>{`Edades de ${props.ageMin} a ${props.ageMax} años`}</li>
              <li>{props.requirements}</li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default VacancyContainer;
