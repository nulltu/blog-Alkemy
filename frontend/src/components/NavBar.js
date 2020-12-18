import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navBar.css'

function NavBar() {
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/newPost">New Post</Link>
            </nav>
        </div>
    )
}

export default NavBar;