import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state = {state} dispatch = {store.dispatch.bind(store)}/>
      </React.StrictMode>,
    </BrowserRouter>,
      document.getElementById('root')
  );
  reportWebVitals();
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree)
