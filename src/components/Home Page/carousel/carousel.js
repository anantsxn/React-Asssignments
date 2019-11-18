import React, { Component } from "react";
import Card from "../card/card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  leftShift = () => {
    if (this.left < 0) this.left = this.left + 300;
    this.list.style.left = `${this.left}px`;
  };

  // rightShift=()=>{
  //   if(this.left > )
  // }

  listProducts() {
    const { products } = this.props;
    let tempListProducts = products.map(product => {
      return <Card key={product.sfid} product={product} />;
    });
    return tempListProducts;
  }

  render() {
    const products = this.listProducts();
    return (
      <div className="carousel-css">
        <div className="btn left" onClick={this.leftShift}>
          {" "}
          &#10094;
        </div>
        <div className="btn right" onClick={this.rightShift}>
          {" "}
          &#10095;{" "}
        </div>
        <div className="carouselCards">
          <div
            className="listOfCards"
            ref={ref => {
              this.list = ref;
            }}
          >
            {products}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
