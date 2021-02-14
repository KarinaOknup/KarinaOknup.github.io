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
    <div className = 'app-wrapper'>
      <Header />
      <NavBar />
      <div className = 'main'>
        <Route path = '/messages'
                render = { () => <Messages state = {props.state.messagesPage} />}/>
        <Route path = '/profile'
                render = { () => <Profile profilePage = {props.state.profilePage}
                addPost = {props.addPost}
                updateNewPostText = {props.updateNewPostText}/> }/>
      </div>
      <footer className='footer'>
      </footer>
    </div>
  );
}

export default App;
