import {Dispatch} from 'redux';
import {changeAppStatus} from './app-reducer';
import {FormCreatePostValuesType} from '../../features/CreatePost/CreatePost';
import {PostsApi} from '../dal/posts-api';

const initialState = {
    posts: []
}

export const PostsReducer = (state: PostsStateType, action: ActionsType): PostsStateType => {
    switch (action.type) {
        default:
            return state;
    }
};

// Actions
export const createPost = () => ({
    type: 'blogCRM/posts/CREATE_POST'
} as const);

// Thunks
export const PostCreate = (data: FormCreatePostValuesType) => async (dispatch: Dispatch) => {
    try {
        dispatch(changeAppStatus('loading'));
        const res = await PostsApi.createPost(data)
        debugger
        dispatch(changeAppStatus('success'));
    }catch (error){
        dispatch(changeAppStatus('failed'));
        console.log(error)
    }
}

// Types
type PostsStateType = typeof initialState;

type ActionsType = ReturnType<typeof createPost>

