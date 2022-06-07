import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import DriverBox from "../../components/Driver-box/Driver-Box";

const Drivers = () => {
  const [data, setData] = useState("");

  const getDrivers = async() => {
    try {

    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });

  return (
    <>
      <h1 className="offset-md-5">Choferes</h1>
      <DriverBox name='poyo' />
    </>
  );
};

export default Drivers;
