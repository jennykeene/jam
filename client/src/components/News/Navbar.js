import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../utils/API/config";
import { AppBar } from '@mui/material';
const Navbar = () => {

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
    <AppBar style={navBar} variant="dark" expand="lg" fixed="top">
      Michael Keene, the Dream Queen
    </AppBar>
  )
}

export default Navbar