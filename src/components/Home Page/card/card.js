/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import "./card.css";

const card = props => {
  return (
    <div className="card">
      <img
        className="image"
        src={props.product.compositeProducts[0].EProductMedia.smallURI}
        alt=""
      />
      <div className="pad">{props.product.sfdcName}</div>
      <div className="pad">
        ${props.product.compositeProducts[0].priceEntry.listPrice}
      </div>
      <button className="button-css">Add To Quote</button>
    </div>
  );
};

export default card;
