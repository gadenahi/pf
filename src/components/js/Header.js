import React from 'react';
import '../../static/Header.css'
import { Navbar, Nav } from 'react-bootstrap';

// const LOGO = `${process.env.PUBLIC_URL}/imgs/about.png`

function Header() {
  const menus = ["Projects", "Skills", "Certificates", "About"]

  const navMenu = menus.map((menu) => (
    <li key={menu} className="nav-item" >
      <Nav.Link href={`#${menu.toLowerCase()}`}>{menu}</Nav.Link>
    </li>
  ));

  return (
    <div id="navbar">
      <Navbar collapseOnSelect id="responsiveMenu" expand="lg" variant="dark">
        {/* <Navbar.Brand href="#"> */}
        {/* <img
          src={LOGO}
          width="30"
          height="30"
          alt="React Bootstrap logo"
      /> */}
        {/* </Navbar.Brand> */}
        <Navbar.Toggle className="nav-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navMenu}
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div>
  );
}

export default Header;