import React, { Component } from 'react';
import Card from '../card/card';
import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.left = 0;
  }

  shouldComponentUpdate(props) {
    this.listOfCards.style.width = `${props.products.length * 320}px`;
  }

  leftShift = () => {
    if (this.left < 0) {
      this.left = this.left + 320;
    }

    this.listOfCards.style.left = `${this.left}px`;
  };

  rightShift = () => {
    const { products } = this.props;
    if (this.left > -((products.length - 3) * 320)) {
      this.left = this.left - 320;
    }
    this.listOfCards.style.left = `${this.left}px`;
  };

  listOfCardsProducts() {
    const { products } = this.props;
    const tempListProducts = products.map(product => {
      return <Card key={product.sfid} product={product} />;
    });
    return tempListProducts;
  }

  render() {
    const products = this.listOfCardsProducts();
    return (
      <div className="carousel-css">
        <div className="btn left" onClick={this.leftShift}>
          &#10094;
        </div>
        <div className="carouselCards">
          <div
            className="listOfCards"
            ref={ref => {
              this.listOfCards = ref;
            }}
          >
            {products}
          </div>
        </div>
        <div className="btn right" onClick={this.rightShift}>
          &#10095;
        </div>
      </div>
    );
  }
}

export default Carousel;
