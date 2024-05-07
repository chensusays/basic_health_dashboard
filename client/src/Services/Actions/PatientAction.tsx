import axios from 'axios';
import { Dispatch } from 'redux';
import { Patient } from 'src/types';

const VITE_API_URL = import.meta.env.VITE_API_URL;

export enum ActionTypes {
    FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
}

interface FetchDataRequestAction {
    type: ActionTypes.FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
    type: ActionTypes.FETCH_DATA_SUCCESS;
    payload: Array<Patient>;
}

interface FetchDataFailureAction {
    type: ActionTypes.FETCH_DATA_FAILURE;
    payload: string;
}

export type Action =
    | FetchDataRequestAction
    | FetchDataSuccessAction
    | FetchDataFailureAction;

export const fetchData = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.FETCH_DATA_REQUEST });

        try {
            const response = await axios.get(VITE_API_URL + '/patients');
            dispatch({
                type: ActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
        } catch (error: any) {
            dispatch({
                type: ActionTypes.FETCH_DATA_FAILURE,
                payload: error.message,
            });
        }
    };
};
