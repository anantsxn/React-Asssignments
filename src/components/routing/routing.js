import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from '../navigation bar/navigation';
import Home from '../../containers/Home/home';
import Login from '../../containers/Login/login';

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
  }
];

const Routing = () => {
  return (
    <Router>
      <NavigationBar navigationLinks={navLinks} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default Routing;
