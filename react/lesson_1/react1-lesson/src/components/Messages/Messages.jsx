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
  let dialogsPersonElements = props.state.dialogPersonData.map(p => <DialogPerson name = {p.name} id= {p.id}/>);
  let dialogsElements = props.state.dialogsData.map(d => <Message text = {d.text}/>)
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