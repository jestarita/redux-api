import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
const Navegation = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src={require('../../img/logo.png')} width="50" height="30" className="d-inline-block align-top" alt="inciio" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
         
          </Nav>
          <Nav className="navbar-nav navbar-right">
             <li className="nav-item" >
               <NavLink exact to="/" className="nav-link" activeClassName="active">
                 Inicio
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink exact to="/movies" className="nav-link" activeClassName="active">
                 Peliculas
                </NavLink>
              </li> 
              <li className="nav-item" >
                <NavLink exact to="/countries" className="nav-link" activeClassName="active">
                Paises
                </NavLink>
              </li>             
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    )
}

export default Navegation;