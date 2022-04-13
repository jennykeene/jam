import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../utils/API/config";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
const Navigation = () => {

// navbar backgroundColor, padding, and fontsize
const navBar = {
  backgroundColor: "rgb(18, 127, 199)",
  padding: "22px",
  fontSize: "20px",
};
// navbrand font size, margin left
const navBrand = {
  fontSize: "26px",
  marginLeft: "18px"
};
// nav marginleft
const nav = {
  marginLeft: "12px"
};

  return (
      <Navbar style={navBar} variant="dark" expand="lg" fixed="top">
      <Navbar.Brand style={navBrand} href="/">{navbarBrand}</Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={nav} className="mk">
          {navs.map(navs =>
            <LinkContainer to={navs.page} key={uuidv4()}>
              <Nav.Link className="mgk">{navs.nav}</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;