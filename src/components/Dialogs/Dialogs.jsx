import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.css';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map( message => <Message message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    // let newMessageElement = React.createRef();

    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text);
    // }

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