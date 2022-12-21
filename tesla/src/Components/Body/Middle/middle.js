import React from "react";
import "./middle.css";


const Item = ({title, desc, backImg, FirstButton, SecondButton, twoButtons}) => {
  return (
    <div
      className="item d-flex justify-content-center"
      style={{
        backgroundImage: `url(${backImg})`,
      }}
    >
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
        </div>
          <div className="item-desc">
            <u>{desc}</u>
          </div>
        <div className="item">
          {twoButtons &&(
            <button className="firstB">{FirstButton}</button>)}
            {twoButtons && (
              <button className="secondB">{SecondButton}</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Item;