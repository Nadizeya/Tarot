import React from "react";
import '../App.css'

function Card(props) {
  const styles = {
    // backgroundImage: props.on ? "url(https://www.shutterstock.com/image-vector/tarot-cards-back-design-abstract-260nw-267982064.jpg)" : "url(props.image)"
    backgroundColor: props.on? "grey" : "blue"
    
  }
   
  return (
    <div style={styles} className="card" onClick={()=>props.clickhandler(props.id)} >
        
    </div>  
  );
}

export default Card; 