import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary p-0">
      <Container className="head">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className=" p-0">
            <Nav.Link className="linktext" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="linktext" href="#link1">
              PROGRAM
            </Nav.Link>
            <Nav.Link className="linktext" href="#link2">
              ABOUT
            </Nav.Link>
            <Nav.Link className="linktext" href="#link3">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;