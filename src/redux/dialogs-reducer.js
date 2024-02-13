const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Alisa' },
        { id: 2, name: 'Marina' },
        { id: 3, name: 'Misha' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Ann' },
        { id: 6, name: 'Nastya' }
    ],
      
    messages: [
        { id: 1, message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel, eius, non consequuntur consectetur delectus perferendis dicta sapiente officia asperiores veniam quisquam magni omnis. Voluptas est quia pariatur praesentium minima.' },
        { id: 2, message: 'Hi. How are you, Ann?' },
        { id: 3, message: 'Lets imagine ...Youre watching TV. Its a hot evening: You feel thirsty. You see an advert for a refreshing drink. You see people looking cool and relaxed.' },
    ],
    newMessageBody: ''
};


const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;    
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;