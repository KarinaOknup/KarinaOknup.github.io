import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {subscribe} from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import {updateNewPostText} from './redux/state';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
      </React.StrictMode>,
    </BrowserRouter>,
      document.getElementById('root')
  );
  reportWebVitals();
}
renderEntireTree(state);
subscribe(renderEntireTree)
