import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map( message => <Message message={message.message} id={message.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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

                <textarea className="area" placeholder="your message..." ref={newMessageElement}></textarea>
                <button className="btn" onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;