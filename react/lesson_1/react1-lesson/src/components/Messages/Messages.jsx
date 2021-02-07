import React from 'react';
import { NavLink } from 'react-router-dom';
import './Messages.css';

const DialogPerson = (props) => {
  let path="/messages/"+props.id;
  return(
    <div className="dialog-person">
    <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return(
    <div className="message">
      {props.text}
   </div>
  )
}

function Messages(props) {
  let dialogPersonData=[
    {id: 1, name: 'Masha'},
    {id: 2, name: 'Semen'},
    {id: 3, name: 'Olga'},
    {id: 4, name: 'Sasha'},
  ]
  let dialogsData=[
    {text:'hi'},
    {text:'how r u?'},
    {text:'Fine'},
    {text:'I am so fine, you so fine...'},
    ]
  let dialogsPersonElements = dialogPersonData.map(p =><DialogPerson name = {p.name} id= {p.id}/>);
  let dialogsElements = dialogsData.map(d =><Message text = {d.text}/>)
  return (
      <div className='messages'>
      <div className="dialogs">
        {dialogsPersonElements}
      </div>
      <div className='dialog-open'>
      {dialogsElements}
      </div>
      </div>
  );
}

export default Messages;