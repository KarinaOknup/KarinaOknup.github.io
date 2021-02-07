import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='main'>
        <Route path='/messages' component={Messages}/>
        <Route path='/profile' component={Profile}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
