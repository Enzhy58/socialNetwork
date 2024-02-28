import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageBody })(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, { sendMessage, updateNewMessageBody }),
    withAuthRedirect,
)(Dialogs);