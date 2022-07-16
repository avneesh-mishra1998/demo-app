import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Davbar() {
  return (
    <div>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home"><b style={{"color":"green"}}>My Brand</b></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto t-d-none ">
                  <NavLink className="mx-4" to="/">Home</NavLink>
                  <NavLink className="mx-4" to="/about">About</NavLink>
                  <NavLink className="mx-4" to="/service">Service</NavLink>
                  <NavLink className="mx-4" to="/contact">Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Davbar;
