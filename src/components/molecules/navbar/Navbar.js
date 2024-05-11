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
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
            // className='nav-links'
            onClick={handleClick}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/news'
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
            onClick={handleClick}
          >
            News
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/login'
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
            onClick={handleClick}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signup'
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
            onClick={handleClick}
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/upload'
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
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
