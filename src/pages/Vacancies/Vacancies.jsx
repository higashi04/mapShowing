import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import VacancyContainer from "../../components/vacancieContainer/VacancyContainer";
import "./Vacancies.css";

const Vacancies = () => {
  const [data, setData] = useState([]);
  const url =
    "https://transportes-villarreal.herokuapp.com/vacantes/getVacancies";

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  const handleData = () => {
    const options = { method: "GET", url: url };
    axios
      .request(options)
      .then((res) => setData(res.data))
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    handleData();
  }, []);
  const correctCapitalize = (str) => {
    const string = str.toLowerCase();
    const stringTwo = string.charAt(0).toUpperCase() + string.slice(1);
    return stringTwo;
  };
  return (
    <>
      <h1 className="vacancy-h1 mt-3">Vacantes</h1>
      {data ? (
        data.map((item) => (
          <VacancyContainer
            key={item._id}
            position={item.position}
            ageMin={item.ageStart}
            ageMax={item.ageEnd}
            gender={item.gender}
            requirements={correctCapitalize(item.requirements)}
          />
        ))
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default Vacancies;
