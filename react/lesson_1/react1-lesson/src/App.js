import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='main'>
      <Messages />
      {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
