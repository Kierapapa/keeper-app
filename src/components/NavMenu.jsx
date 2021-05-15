import React from 'react'
import {Link} from 'react-router-dom'

const NavMenu = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/my-contact">My Contact</Link>
            <Link to="/emoji-pedia">Emoji Pedia</Link>
        </div>
    )
}

export default NavMenu
