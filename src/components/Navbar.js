import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/components/Navbar.scss';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as HomeHoverIcon } from '../assets/home-hover.svg';
import { ReactComponent as AboutIcon } from '../assets/about.svg';
import { ReactComponent as AboutHoverIcon } from '../assets/about-hover.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as MenuHoverIcon } from '../assets/menu-hover.svg';
import { ReactComponent as OrderIcon } from '../assets/order.svg';
import { ReactComponent as OrderHoverIcon } from '../assets/order-hover.svg';

const Navbar = () => {
    const [homeHovered, setHomeHovered] = useState(false);
    const [aboutHovered, setAboutHovered] = useState(false);
    const [menuHovered, setMenuHovered] = useState(false);
    const [orderHovered, setOrderHovered] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [shouldFadeIn, setShouldFadeIn] = useState(true);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeNav = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShouldFadeIn(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <nav className={`navbar ${shouldFadeIn ? 'fade-in' : ''} ${navActive ? 'nav-active' : ''}`}>
            <div className="menu-icon" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='nav-items-container'>
                <Link
                    className='nav-item'
                    to="home"
                    smooth={true}
                    onClick={closeNav}
                    onMouseEnter={() => setHomeHovered(true)}
                    onMouseLeave={() => setHomeHovered(false)}
                >
                    {homeHovered ? (
                        <HomeHoverIcon className='icon' />
                    ) : (
                        <HomeIcon className='icon' />
                    )}
                    Accueil
                </Link>
                <Link
                    className='nav-item'
                    to="about"
                    smooth={true}
                    onClick={closeNav}
                    onMouseEnter={() => setAboutHovered(true)}
                    onMouseLeave={() => setAboutHovered(false)}
                >
                    {aboutHovered ? (
                        <AboutHoverIcon className='icon' />
                    ) : (
                        <AboutIcon className='icon' />
                    )}
                    À Propos
                </Link>
                <Link
                    className='nav-item'
                    to="menu"
                    smooth={true}
                    onClick={closeNav}
                    onMouseEnter={() => setMenuHovered(true)}
                    onMouseLeave={() => setMenuHovered(false)}
                >
                    {menuHovered ? (
                        <MenuHoverIcon className='icon' />
                    ) : (
                        <MenuIcon className='icon' />
                    )}
                    Menu
                </Link>
                <Link
                    className='nav-item'
                    to="order"
                    smooth={true}
                    onClick={closeNav}
                    onMouseEnter={() => setOrderHovered(true)}
                    onMouseLeave={() => setOrderHovered(false)}
                >
                    {orderHovered ? (
                        <OrderHoverIcon className='icon' />
                    ) : (
                        <OrderIcon className='icon' />
                    )}
                    Commander
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
