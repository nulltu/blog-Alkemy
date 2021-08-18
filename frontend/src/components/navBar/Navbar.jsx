import React from 'react';
import { Link } from 'react-router-dom';
import add from '../../assets/icons/add.svg';
import './navBar.css';

function NavBar() {
  return (
    <div>
      <nav>
        <h2 className="logo">After-Coder</h2>
        <Link className="link__nav" to="/">
          Home
        </Link>
        <Link className="new-post" to="/newPost">
          <img src={add} alt="" />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
