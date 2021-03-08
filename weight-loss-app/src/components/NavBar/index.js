import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import AuthNav from './auth-nav'
import './navbar.css';


  function Navigation({ location }) {
    return (
        <Navbar className='navbar' expand='md' activeKey={location.pathname}>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link className ="navlinks" href='/MealPlan'>Meal Plan</Nav.Link>
                    <Nav.Link className ="navlinks" href='/journal'>Food Journal</Nav.Link>
                    <Nav.Link className = "navlinks" href='/Dashboard'>Dashboard</Nav.Link>
                    <Nav.Link className = "navlinks" href='/'>Home</Nav.Link>
                </Nav>
              <AuthNav />
            </Navbar.Collapse>
        </Navbar> 
         

    )
};

const NavBar = withRouter(Navigation)

export default NavBar;