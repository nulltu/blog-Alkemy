import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  return (
    <div>
      <nav>
        <h2 className="logo">After-Coder</h2>
        <Link className="link__nav" to="/">
          Home
        </Link>
        <Link className="link__nav" to="/newPost">
          New Post
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
