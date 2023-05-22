import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

function NavBar() {
    return (
        <nav id="navbar">
            <Logo />
            <NavLinks />
        </nav>
    );
}

export default NavBar;
