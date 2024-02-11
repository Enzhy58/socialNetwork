import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, post: 'Hello. Its my first post.', like: 30 },
                { id: 2, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat error ab, esse consequatur voluptas. Molestias, natus iure explicabo magnam facere quaerat. Dolorem debitis earum nostrum delectus, cum voluptas omnis?', like: 42 },
                { id: 3, post: 'Nobody loves me((', like: 15 }
            ],
            newPostText: ''
        },
    
        dialogsPage: {
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
        }
          
    },

    _callSubscriber()  {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{ type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

}

export default store;