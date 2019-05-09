import React, { Component } from 'react';
import {Link , BrowserRouter as Router} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component {
    render() {
        return (
        <NavWrapper className = 'navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
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
            <ButtonContainer>
            <span className="mr-2">   
            <i className="fas fa-cart-plus"></i></span>
            My Cart
            </ButtonContainer>
            </Link>
        </Router>
        </NavWrapper>
            );
    }
}

const NavWrapper = styled.nav`
 background:var(--mainBlue);
 .nav-link{
     color:var(--mainWhite !important);
     font-size : 1.3rem;
     text-transform : capitalize;
 }
`;


export default Navbar;