import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} id={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className="dialogs">
            <div className="dialogs__wrapper">
                <h2 className="title">Messages</h2>
                <ul className="dialogs-name__list">
                    { dialogsElements }
                </ul>
            </div>

            <div className="dialogs__wrapper">
                <ul className="dialogs-text__list">
                    { messagesElements }
                </ul>

                <textarea className="area" placeholder="your message..." value={newMessageBody} onChange={onNewMessageChange}></textarea>
                <button className="btn" onClick={onSendMessageClick}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;