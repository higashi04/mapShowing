import React, { useEffect } from "react";
import "./Safety.css";

const Safety = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  return (
    <>
      <h1 className="safety-head mt-3">Política de Seguridad</h1>
      <main className="safety-main">
        <p className="safety-main-paragraph">
          En Transporte Villarreal la seguridad es un valor primordial y estamos
          comprometidos a administrar nuestras operaciones de servicio y salud
          ocupacional de todo el personal, clientes y visitantes.
        </p>
        <h2 className="safety-h2">Por ello establecemos lo siguiente:</h2>
      </main>
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-4">
              <p className="safety-p">
                La seguridad forma parte integral de la responsabilidad de cada
                puesto de trabajo.
              </p>
            </div>
            <div className="col-4">
              <p className="safety-p">
                Trabajaremos para eliminar cabalmente y de forma definitiva las
                fatalidades, las lesiones, y las discapacidades originadas por
                accidente de trabajo.
              </p>
            </div>
            <div className="col-4">
              <p className="safety-p">
                Proveeremos un ambiente seguro, así como el equipo de protección
                necesario para prevenir las enfermedades ocupacionales.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4">
              <p className="safety-p">
                Proveeremos los sistemas, controles, procedimientos, estándares
                y equipos, así como la capacitación necesaria para mantener en
                condiciones de seguridad optima todos los procesos.
              </p>
            </div>
            <div className="col-4">
              <p className="safety-p fifth-p">
                Se realizaran auditorias internas y externas necesarias para el
                monitoreo del desempeño de seguridad y así promover la mejora
                continua en los procesos de detención, eliminación y control de
                riesgos inherentes en los lugares de trabajo.
              </p>
            </div>
            <div className="col-4">
              <p className="safety-p">
                Toda persona que Ingrese a nuestras instalaciones como cliente,
                proveedor o visitante deberá conocer las normas, reglamentos y
                procedimientos de seguridad aplicables al desempeño de sus
                labores dentro de la empresa.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Safety;
