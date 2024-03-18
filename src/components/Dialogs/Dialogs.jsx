import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.css';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/Preloader/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} id={message.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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

                <AddMessageFormRedux onSubmit={addNewMessage} />
                
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form action="#" onSubmit={props.handleSubmit} >
            <Field className="area" component={Textarea} validate={ [ required, maxLengthCreator(50) ] } name="newMessageBody" placeholder="your message..." />
            <button className="btn">Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;