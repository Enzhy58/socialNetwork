import { NavLink } from 'react-router-dom';
import './../Dialogs.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <li className="dialogs-name__item">
        <NavLink className="dialogs-name__link" to={path}>{props.name}</NavLink>
    </li>
}

export default DialogItem;