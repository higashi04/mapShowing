import React from "react";
import './TextContainer.css'
const TextContainer = (props) => {
  return (
    <div className="box m-3">
      <h1 className="title">{props.title}</h1>
      <p className="paragraph">{props.text}</p>
    </div>
  );
};

export default TextContainer;
