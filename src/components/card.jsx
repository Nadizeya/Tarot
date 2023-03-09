import React, { useState } from "react";
import "../App.css";
import SelectedCard from "./selectedcard";

function Card(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const cardStyle = {
    backgroundColor: isSelected ? "grey" : "blue",
  };

  return (
    <div style={cardStyle} className="card" onClick={handleClick}>
      {isSelected && <Card {...props} className= "selected-card" />}
    </div>
  );
}

export default Card;