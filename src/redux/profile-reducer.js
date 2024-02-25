import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, post: 'Hello. Its my first post.', like: 30 },
        { id: 2, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat error ab, esse consequatur voluptas. Molestias, natus iure explicabo magnam facere quaerat. Dolorem debitis earum nostrum delectus, cum voluptas omnis?', like: 42 },
        { id: 3, post: 'Nobody loves me((', like: 15 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText

            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;