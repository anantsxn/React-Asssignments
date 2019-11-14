/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

const card = props => {
  return (
    <div className="card">
      <img
        src={props.product.compositeProducts[0].EProductMedia.smallURI}
        alt=""
      />
      <div>{props.product.sfdcName}</div>
      <div>{props.product.compositeProducts[0].priceEntry.listPrice}</div>
      <button>Add To Quote</button>
    </div>
  );
};

export default card;
