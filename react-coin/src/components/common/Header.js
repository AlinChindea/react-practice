import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <img src={logo} alt="logo" className='header-logo'/>
      </Link>

      <Search />
    </div>
  );
};

export default Header;
