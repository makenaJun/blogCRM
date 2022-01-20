import {instance} from './api';
import {FormCreatePostValuesType} from '../../features/CreatePost/CreatePost';

export const PostsApi = {
    createPost(data: FormCreatePostValuesType) {
        // @ts-ignore
        return instance.post<ResponsePostData<CreatePostDataType>>('/post', data);
    },
}

// Types

type ResponsePostData<D = {}> = {
    message: string,
    data: D,
    resultCode: number,
}

type CreatePostDataType = {
    _id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
}

