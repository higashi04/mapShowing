import React, { useState, useEffect } from "react";
import axios from "axios";

import VacancyContainer from "../../components/vacancieContainer/VacancyContainer";

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
  return (
    <>
      <h1>Vacancies</h1>
      {data.map(item => <VacancyContainer key={item._id} position={item.position} ageMin={item.ageStart} ageMax={item.ageEnd} /> )}
    </>
  );
};

export default Vacancies;
