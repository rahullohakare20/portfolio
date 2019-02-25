import React  from 'react';
import { NavLink } from 'react-router-dom'

function MainNav(props) {
    return (
    <nav onClick={props.toggleMenu} id="main-nav" className={props.isMenuOpen ? 'is-visible' : ''}>
        <ul>
            <li><NavLink to="/"><span>Home</span></NavLink></li>
            <li><NavLink to="/about"><span>About</span></NavLink></li>
            <li><NavLink to="/experience"><span>Experience</span></NavLink></li>
            <li><NavLink to="/resume"><span>Resume</span></NavLink></li>
        </ul>
        <button className="cd-close-menu">Close<span></span></button>
    </nav>
    )
}

export default MainNav;
