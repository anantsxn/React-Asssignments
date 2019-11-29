import React, { Component } from 'react';
import './PLPwithSearch.scss';

const PLPwithsearch = (WrappedComponent, Products) => {
    class ProductsWithComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                products: Products,
                searchText: ''
            };
        }

        handleSearch = event => {
            this.setState({ searchText: event.target.value });
        };

        filterProducts = () => {
            const { products, searchText } = this.state;
            const inputText = searchText.toLowerCase().trim();
            console.log(products, "in filter");
            const filtered = products.filter(item => {

                return item.sfdcName.toLowerCase().includes(inputText);
            });
            return filtered;
        };

        render() {
            return (
                <>
                    <input className="search" type="text" placeholder='Search...' onChange={this.handleSearch} />
                    <WrappedComponent products={this.filterProducts()} />
                </>
            );
        }
    }

    return <ProductsWithComponent />
}

export default PLPwithsearch;