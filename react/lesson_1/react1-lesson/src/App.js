import logo from './logo.svg';
import React from 'react';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
      <header className="header">
        <img src="https://www.humanrightslogo.net/sites/default/files/HRLogo1C.png" alt="logo"/>
      </header>
      <div className="site-bar">
        <ul className="page">
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <hr/>
          <li>Settings</li>
        </ul>
      </div>
      <div className="main">
        <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80" alt="background-computer"/>
        <div className="my-info">
          <img src="#" alt="my-photo"/>
          <div className="text-info">
            <span className="my-name">petya</span>
            <ul>
              <li>data of birdth</li>
              <li>city</li>
              <li>education</li>
              <li>web site</li>
            </ul>
          </div>
        </div>
      <div className="posts"></div>
      </div>
    </div>
  );
}

export default App;
