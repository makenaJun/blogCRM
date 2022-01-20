const initialState = {
    status: 'idle' as AppStatusType,
    error: null as null | string,
}

export const appReducer = (state: AppStateType = initialState, action: ActionsTypes): AppStateType => {
    switch (action.type) {
        case 'blogCRM/app/SET_APP_ERROR':
        case 'blogCRM/app/CHANGE_STATUS': {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

// Actions
export const changeAppStatus = (status: AppStatusType) => ({
    type: 'blogCRM/app/CHANGE_STATUS',
    payload: {status},
} as const);
export const setAppError = (error: AppErrorType) => ({
    type: 'blogCRM/app/SET_APP_ERROR',
    payload: {error},
} as const);

// Types
type AppStateType = typeof initialState;

export type AppStatusType = 'idle' | 'loading' | 'failed' | 'success';

export type AppErrorType = null | string;

export type ActionsTypes = ReturnType<typeof changeAppStatus> | ReturnType<typeof setAppError>