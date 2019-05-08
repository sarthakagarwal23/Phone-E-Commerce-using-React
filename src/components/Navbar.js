import React, { Component } from 'react';
import {Link , BrowserRouter as Router} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
    render() {
        return (
        <nav className = 'navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        <Router>
        <Link to='/'>
        <img src={logo} alt="icon" className="navbar-brand"></img>
        </Link>
        </Router>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
        <Router>
        <Link to='/' className="nav-link">Products</Link>
        </Router>
        </li>
        
        </ul>
        <Router>
        <Link to="/cart" className="ml-auto">
        <button><i className="fas fa-cart-plus"></i>My Cart</button>
        </Link>
        </Router>
        </nav>
            );
    }
}

export default Navbar;