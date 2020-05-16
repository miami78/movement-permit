import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo.svg';
import './header.styles.scss';


const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/exempted'>Exempted Sectors</Link>
            <div> | </div>
            <Link className='option' to='/faq'>FAQ</Link>
        </div>
    </div>
);

export default Header;
