// reducer.js
import * as ActionTypes from './types';

const initialState = {
  projects: [],
  isLoading: false,
  errorMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      };
    case ActionTypes.FETCH_PROJECTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
        errorMessage: null
      };
    case ActionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
