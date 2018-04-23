import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <img src={logo} alt="logo" className='header-logo'/>
      </Link>
    </div>
  );
};

export default Header;
