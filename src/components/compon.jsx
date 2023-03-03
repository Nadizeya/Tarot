
import '../App.css';
import Card from './card';
import carddatas from '../carddatas';
import Row from './Row';
import React, { useEffect } from 'react';



const Background = ({ backgroundImageUrl, children }) => {
  useEffect(() => {
    const handleResize = () => {
      const background = document.querySelector(".background");
      if (background) {
        background.style.width = `${window.innerWidth}px`;
        background.style.height = `${window.innerHeight}px`;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
};

export default Background;
