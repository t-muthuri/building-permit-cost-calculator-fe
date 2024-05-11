import React, { useState } from 'react';
import '../navbar/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <ul className={click ? 'navbar active' : 'navbar'}>
        <li>
          <NavLink
            to='/'
            activeClassName='active'
            className='nav-links'
            onClick={handleClick}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/news'
            activeClassName='active'
            className='nav-links'
            onClick={handleClick}
          >
            News
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/login'
            activeClassName='active'
            className='nav-links'
            onClick={handleClick}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signup'
            activeClassName='active'
            className='nav-links'
            onClick={handleClick}
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/upload'
            activeClassName='active'
            className='nav-links'
            onClick={handleClick}
          >
            Upload
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
