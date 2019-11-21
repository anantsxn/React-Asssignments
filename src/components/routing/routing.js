import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from '../navigation bar/navigation';
import Home from '../../containers/Home/home';
import Login from '../../containers/Login/login';
import Product from '../../containers/PLP/product';
import SearchResultsPage from '../../containers/SearchResult/searchresultsPage';

const navLinks = [
  {
    id: '1',
    navLink: '/',
    navName: 'Home'
  },
  {
    id: '2',
    navLink: '/login',
    navName: 'Login'
  },
  {
    id: '3',
    navLink: '/product',
    navName: 'Products'
  },
  {
    id: '4',
    navLink: '/searchProducts',
    navName: 'SearchResultsPage'
  }
];

const Routing = () => {
  return (
    <Router>
      <NavigationBar navigationLinks={navLinks} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/product" component={Product} />
      <Route path="/searchproducts" component={SearchResultsPage} />
    </Router>
  );
};

export default Routing;
