import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
      <div className="nav-bar">
        <ul className="page">
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <hr/>
          <li>Settings</li>
        </ul>
      </div>
);
}

export default NavBar;
