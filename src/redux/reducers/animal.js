import * as types from 'redux/constants/ActionTypes';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
const animal = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ANIMALS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_ANIMALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case types.FETCH_ANIMALS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default animal;
