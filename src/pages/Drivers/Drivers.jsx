import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from '../../components/Spinner/Spinner'
import './Drivers.css'

import DriverBox from "../../components/Driver-box/Driver-Box";

const Drivers = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [company, setCompany] = useState("");
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate();

  const correctCapitalize = (str) => {
    const string = str.toLowerCase();
    const stringTwo = string.charAt(0).toUpperCase() + string.slice(1);
    return stringTwo;
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  useEffect(() => {
    if (user === null) {
      navigate("/login");
      toast.error("Favor de iniciar sesión.");
    } else {
      const getDrivers = () => {
        let url;
        setLoading(true)
        setCompany(correctCapitalize(user.company))
        switch (user.company.toLowerCase()) {
          case "medline":
            url =
              "https://transportes-villarreal.herokuapp.com/drivers/getDrivers/medline";
            break;
          case "oes":
            url =
              "https://transportes-villarreal.herokuapp.com/drivers/getDrivers/oes";
            break;
          case "bpi":
            url =
              "https://transportes-villarreal.herokuapp.com/drivers/getDrivers/bpi";
            break;
          case "aistermi":
            url =
              "https://transportes-villarreal.herokuapp.com/drivers/getDrivers/aistermi";
            break;
          case "ezo":
            url =
              "https://transportes-villarreal.herokuapp.com/drivers/getDrivers/ezo";
            break;
          default:
            url =
              "https://transportes-villarreal.herokuapp.com/drivers/getDrivers";
            break;
        }
        try {
          const options = { method: "GET", url: url };
          axios
            .request(options)
            .then((res) => setData(res.data))
            .catch(function (error) {
              console.error(error);
            });
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false)
        }
      };
      getDrivers();
    }
  }, [user, navigate]);

  return (
    <main className="pb-5 data-box">
      <div className="dataBox">
      <h1>Choferes de {company}</h1>

{ isLoading ? <Spinner/> : data.map((item) => (
  <DriverBox key={item._id} name={item.name} id={item._id} />
))}
      </div>
    </main>
  );
};

export default Drivers;
