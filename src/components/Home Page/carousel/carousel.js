import React, { Component } from 'react';
import Card from '../card/card';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(product => {
          return <Card key={product.sfid} product={product} />;
        })}
      </div>
    );
  }
}

export default Carousel;
