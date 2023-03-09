import React from "react";
import "../App.css";


function SelectedCard({card}) {
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <p>{card.value}</p>
    </div>
  );
}

export default SelectedCard;
