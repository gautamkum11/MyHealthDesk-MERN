import React, {useState} from "react";
import "./styles.css";
import { UilMultiply, UilBars } from '@iconscout/react-unicons'
import {Link as ScrollLink} from "react-scroll";

function Navbar() {
    const [toggleNav, setToggleNav] = useState(false)
    const handleNavToggle = () => setToggleNav(!toggleNav)
    const handleCloseNav = () => setToggleNav(false)

    return (
        <div className="navbar">
            <div className="navbar-1">
                <div className= "navbar-2">
                    <a className="navtitle" href="#home">My HealthDesk</a>
                </div>
                <div className = "listicon" onClick={handleNavToggle}>
                {toggleNav ? <UilMultiply size='32' /> : <UilBars size='32' />}
                </div>
                <ul className="navbarcomp" onClick={handleNavToggle} style = {{left : toggleNav ? "0" : "-150%" }}>
                    <li className="navbarlist">
                        <ScrollLink to = "home" smooth = {true} duration = {1000} onClick={handleCloseNav}>
                            <a className="navbarcomp-1" href="#home">Home</a>
                        </ScrollLink>
                    </li>
                    <li className="navbarlist">
                        <ScrollLink to = "about" smooth = {true} duration = {1000} onClick={handleCloseNav}>
                        <a className="navbarcomp-1" href="#about">About</a>
                        </ScrollLink>
                    </li>
                    <li className="navbarlist">
                        <ScrollLink to = "contact" smooth = {true} duration = {1000} onClick={handleCloseNav}>
                        <a className="navbarcomp-1"  href="#contact">Register</a>
                        </ScrollLink>
                    </li>   
                </ul>
            </div>
        </div>
    );
}

export default Navbar;