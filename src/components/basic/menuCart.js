import React from "react";
import "./style.css";

const MenuCart = ({ menuData }) => {
  return (
    <>
        <section className="main-card--container">
      {menuData.map((curElem, index) => {
          return (
          <div className="card-container" key={index}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">
                  {index + 1}
                </span>
                <span className="card-author subtle">{curElem.category}</span>
                <h2 className="card-title">{curElem.title}</h2>
                <span className="card-description subtle">
                  {curElem.description}
                </span>
                <div className="card-read">Read</div>
                <img src={curElem.image} draggable="false" 
                className="card-media" alt="" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </div>
          );
        })}
        </section>;
    </>
  );
};

export default MenuCart;
