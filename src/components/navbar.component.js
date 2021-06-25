import React from "react";
import { Link } from 'react-router-dom';

function NavBarComponent() {
  return (
    <div className="navbar">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-name left">TEXT AUDIO CONVERTER</Link>

          <ul className="right hide-on-med-and-down">
            <li><Link to="/link" className="waves-effect waves-light btn">Link</Link></li>
            <li><Link to="/text" className="waves-effect waves-light btn">Text</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarComponent;
