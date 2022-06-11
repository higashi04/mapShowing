import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DriverDataEach from "../../components/Driver-DataEach/DriverDataEach";
import Spinner from "../../components/Spinner/Spinner";

export default function DriverPage() {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  const getDriver = () => {
    setLoading(true);
    const url = `https://transportes-villarreal.herokuapp.com/drivers/getDrivers/${id}`;
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
      setLoading(false);
    }
  };
  useEffect(() => {
    getDriver();
  });
  return (
    <div className="container my-5 pb-5 dataBox">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <DriverDataEach driver={data} />
        </>
      )}
    </div>
  );
}
