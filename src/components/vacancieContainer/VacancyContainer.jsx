import React from "react";

const VacancyContainer = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>{props.position}</h1>
      </div>
      <div className="row">
        {`Edades de ${props.ageMin} a ${props.ageMax} años`}
      </div>
    </div>
  );
};

export default VacancyContainer;
