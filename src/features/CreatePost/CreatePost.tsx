import React from 'react';
import {useForm} from 'react-hook-form';
import {PostCreate} from '../../main/bll/posts-reducer';
import {useDispatch} from 'react-redux';

export type FormCreatePostValuesType = {
    title: string,
    content: string,
}

export const CreatePost = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<FormCreatePostValuesType>();
    const onSubmit = handleSubmit((data) => {
        dispatch(PostCreate(data));
        console.log(data)
    });

    return (<>
            <form onSubmit={onSubmit}>
                <label>Title: <input {...register('title')}/></label>

                <label>Content: <textarea {...register('content')} /></label>
                <button type={'submit'}>Create</button>
            </form>
        </>
    );
};