import React from 'react';
import './card.css';

const card = props => {
  const { product } = props;
  return (
    <div className="card">
      <img
        className="image"
        src={product.compositeProducts[0].EProductMedia.smallURI}
        alt=""
      />
      <div className="pad">{product.sfdcName}</div>
      <div className="pad">
        ${product.compositeProducts[0].priceEntry.listPrice}
      </div>
      <button className="button-css">Add To Quote</button>
    </div>
  );
};

export default card;
