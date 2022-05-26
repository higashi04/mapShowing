import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contacto.css";

const Contacto = () => {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  const resetForm = () =>{
    setName('')
    setContact('')
    setReason('')
    setText('')
  }
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: 'https://afternoon-citadel-81863.herokuapp.com/clientes/sendmail',
      data: {
        name: name,
        reason: reason,
        contact: contact,
        text: text
      }
    }).then((response) => {
      if(response.data.status === 'success'){
        alert('Su forma ha sido mandada, pronto estaremos en contacto con usted.')
        resetForm()
      }else{
        alert('Se produjo un error, favor de volver a intentar.')
      }
    })
    navigate('/')
  }

  return (
    <>
      <h1 className="contact-title mb-5">Contacto</h1>
      <div className="container contact-box">
        <form action="" method="POST" onSubmit={(e)=> submitHandler(e)}>
          <div className="row form-floating pb-2">
            <input
              type="text"
              name="name"
              className="form-control contact-input"
              id="user"
              placeholder="Su nombre"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="user">Su nombre</label>
          </div>
          <div className="row form-floating pb-2">
            <input
              type="text"
              name="reason"
              className="form-control"
              id="reason"
              value={reason}
              onChange={e => setReason(e.target.value)}
              placeholder="Motivo"
              required
            />
            <label htmlFor="reason">Motivo</label>
          </div>
          <div className="row form-floating pb-2">
            <input
              type="text"
              name="contact"
              className="form-control"
              id="contact"
              value={contact}
              onChange={e => setContact(e.target.value)}
              placeholder="Teléfono o Email"
              required
            />
            <label htmlFor="contact">Teléfono o Email</label>
          </div>
          <div className="row form-floating">
            <textarea
              type="text"
              className="form-control form-control-lg contact-text"
              name="text"
              id="floatingComments"
              placeholder="Comentarios:"
              onChange={e => setText(e.target.value)}
              value={text}
            ></textarea>
            <label htmlFor="floatingComments" className="form-label">
              Comentarios:{" "}
            </label>
          </div>
          <button className="btn btn-success mt-3">Mandar</button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
