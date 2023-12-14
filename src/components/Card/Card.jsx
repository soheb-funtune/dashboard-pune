import React from "react";
import "./card.css";

const Card = ({ heading, children }) => {
  return (
    <div className="card-wapper">
      <h3
        style={{ visibility: heading ? "visible" : "hidden" }}
        className="card-heading"
      >
        {heading ? heading : "nothing"}
      </h3>
      <div className="card-container">{children}</div>
    </div>
  );
};

export default Card;
