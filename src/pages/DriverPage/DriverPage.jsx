import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DriverDataEach from "../../components/Driver-DataEach/DriverDataEach";

export default function DriverPage() {
    const [data, setData] = useState("");
    const {id} = useParams()
    useEffect(() => {
        document.body.style.backgroundColor = "#669BC7";
      });
      const getDriver = () => {
        const url = `https://transportes-villarreal.herokuapp.com/drivers/getDrivers/${id}`
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
          }
    }
    useEffect(() => {
        getDriver()
    })
  return (
  <div className="container my-5">
    {/* <img className="img-fluid driverPhoto"  src={data.photo.url} alt={data.photo.filename} /> */}
      <DriverDataEach driver={data} />
      {/* <div>{data.bus.unidad}</div> */}
  </div>);
}
