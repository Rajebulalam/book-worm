import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-part'>
                <Link to='/'>KHOKAN</Link>
            </div>
            <div className='menu-bar'>
                <nav>
                    <Link to = '/'>HOME</Link>
                    <Link to = '/reviews'>REVIEWS</Link>
                    <Link to = '/dashboard'>DASHBOARD</Link>
                    <Link to = '/blogs'>BLOGS</Link>
                    <Link to = '/about'>ABOUT</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;