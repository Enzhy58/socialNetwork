import './../Dialogs.css';

const Message = (props) => {
    return <li className="dialogs-text__item">
        {props.message}
    </li>
}

export default Message;