import React from 'react';
import './Header.css';
import logo from '../../assests/logo (2).png';

const Header = () => {
    return (
        <nav className='header'>
        <img className='logo' src={logo} alt="" />
         <div className='link'> 
         <a href="/home">Home </a>
         <a href="/about">About </a>
         <a href="/contact">Contact </a>
         <a href="/login">Login </a></div>
        </nav>
    );
};

export default Header;