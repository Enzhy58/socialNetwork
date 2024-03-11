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
    ]
};


const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case  SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;    
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;