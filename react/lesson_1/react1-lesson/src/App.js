import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='main'>
        <Route path='/messages' render={ () => <Messages state={props.state.messagesPage} />}/>
        <Route path='/profile'  render={ () => <Profile state={props.state.profilePage} /> }/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
