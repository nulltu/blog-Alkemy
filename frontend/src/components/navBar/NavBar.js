import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import logo from '../../assets/imgs/logo-header.png'

function NavBar() {
    return (
        <div>
            <nav>
            <Link to="/"><img src={logo} alt=""/></Link>
            <Link className="link__nav" to="/">Home</Link>
            <Link  className="link__nav" to="/newPost">New Post</Link>
            </nav>
        </div>
    )
}

export default NavBar;