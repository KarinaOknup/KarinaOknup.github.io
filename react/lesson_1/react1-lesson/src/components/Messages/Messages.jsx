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
  let dialogsElements = props.state.dialogsData.map(d => <Message text = {d.text}/>);
  let newMessage = React.createRef();
  let sendMessage = () =>{
    alert(newMessage.current.value);
  }
  return (
      <div className="page-messages">
      <div className="dialogs">
        {dialogsPersonElements}
      </div>
      <div className="dialog-open">
        <div className="dialog-area">
          {dialogsElements}
        </div>
        <div className="new-message">
          <textarea ref={newMessage}></textarea>
          <button onClick={sendMessage} className='send-message'>send</button>
        </div>
      </div>
      </div>
  );
}

export default Messages;