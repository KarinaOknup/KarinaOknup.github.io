import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
      <div className="nav-bar">
        <ul className="page">
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/messages'>Messages</NavLink>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <hr/>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
);
}

export default NavBar;
