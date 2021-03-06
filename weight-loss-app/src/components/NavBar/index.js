import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import AuthNav from './auth-nav'


  function Navigation({ location }) {
    return (
        <Navbar bg='dark' expand='md' activeKey={location.pathname}>
            <Navbar.Brand className ="navlinks"  href='/'>Weight Loss Journey</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link className ="navlinks" href='/MealPlan'>Recipes</Nav.Link>
                    <Nav.Link className ="navlinks" href='/journal'>Food Journal</Nav.Link>
                    <Nav.Link className = "navlinks" href='/Dashboard'>Dashboard</Nav.Link>
                </Nav>
              <AuthNav />
            </Navbar.Collapse>
        </Navbar> 
         

    )
};

const NavBar = withRouter(Navigation)

export default NavBar;