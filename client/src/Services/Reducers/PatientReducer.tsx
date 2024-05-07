
import { Action, ActionTypes } from '@Actions/PatientAction';
import { UnknownAction } from '@reduxjs/toolkit';
import { Patient } from 'src/types';

export interface State {
  data: Patient[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const patientReducer = (state: State | undefined = initialState, action: UnknownAction | Action): State => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload as Patient[], error: null };
    case ActionTypes.FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload as State["error"]};
    default:
      return state;
  }
};

export default patientReducer;
