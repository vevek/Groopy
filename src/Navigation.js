import React, { Component } from "react";
import { Link, link } from "react-router-dom";
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import './components/Navbar.css';

function Navigation () {
      return (
        <Navbar className="Navbar" expand="lg">
          <Container>
          <Navbar.Brand href="/home-page">
          <img
            src="https://i.imgur.com/2CW5TyX.png"
            width="100"
            height="100"   
            className="d-inline-block align-top"
            alt="Groopy logo"
          />
      </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id="navone" href="/home-page" mr-auto nav-tabs>Home</Nav.Link>
                <Nav.Link id="navtwo" href="/works-page">How it works</Nav.Link>
                <Nav.Link id="navthree" href="/listings-page">Listings</Nav.Link>
                <Nav.Link id="navfour" href="/contact-page">Contact Us</Nav.Link>
                <Nav.Link id="navfive" href="/submit-page">Submit a Listing</Nav.Link>
                {/* <Button variant="primary">Submit a Listing</Button>{' '} */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
  
  export default Navigation;