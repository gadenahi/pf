import React from 'react';
import '../../static/Header.css'

function Header() {
  const menus = ["Projects", "Skills", "Certificates", "About"]

  const navMenu = menus.map((menu) => (
    <li key={menu} className="nav-item">
      <a className="nav-link" href={`#${menu.toLowerCase()}`}>
        {menu}
      </a>
    </li>
  ));
    
  return (
    <div id="navbar" className="navbar navbar-light navbar-expand-sm">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsiveMenu"
        aria-controls="responsiveMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="responsiveMenu" className="collapse navbar-collapse">
        <ul className="navbar-nav">{navMenu}</ul>
      </div>
    </div>
  );
}

export default Header;