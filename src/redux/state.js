let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, post: 'Hello. Its my first post.', like: 30 },
                { id: 2, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat error ab, esse consequatur voluptas. Molestias, natus iure explicabo magnam facere quaerat. Dolorem debitis earum nostrum delectus, cum voluptas omnis?', like: 42 },
                { id: 3, post: 'Nobody loves me((', like: 15 }
            ],
            newPostText: 'it-camasutra.com'
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
            ]
        }
          
    },

    getState() {
        return this._state;
    },

    _callSubscriber()  {
        console.log('State changed');
    },

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            like: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

// let rerenderEntireTree = () => {
//     console.log('State changed');
// }

// let state = {

//     profilePage: {
//         posts: [
//             { id: 1, post: 'Hello. Its my first post.', like: 30 },
//             { id: 2, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat error ab, esse consequatur voluptas. Molestias, natus iure explicabo magnam facere quaerat. Dolorem debitis earum nostrum delectus, cum voluptas omnis?', like: 42 },
//             { id: 3, post: 'Nobody loves me((', like: 15 }
//         ],
//         newPostText: 'it-camasutra.com'
//     },

//     dialogsPage: {
//         dialogs: [
//             { id: 1, name: 'Alisa' },
//             { id: 2, name: 'Marina' },
//             { id: 3, name: 'Misha' },
//             { id: 4, name: 'Sasha' },
//             { id: 5, name: 'Ann' },
//             { id: 6, name: 'Nastya' }
//         ],
          
//             messages: [
//             { id: 1, message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vel, eius, non consequuntur consectetur delectus perferendis dicta sapiente officia asperiores veniam quisquam magni omnis. Voluptas est quia pariatur praesentium minima.' },
//             { id: 2, message: 'Hi. How are you, Ann?' },
//             { id: 3, message: 'Lets imagine ...Youre watching TV. Its a hot evening: You feel thirsty. You see an advert for a refreshing drink. You see people looking cool and relaxed.' },
//         ]
//     }
      
// }

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         post: state.profilePage.newPostText,
//         like: 0
//     };

//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;