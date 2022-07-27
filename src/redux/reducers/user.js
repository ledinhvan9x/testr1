import * as types from 'redux/constants/ActionTypes';

const initialState = {
  user: {
    token: null,
  },
  isLoading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
const user = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isLoading: false,
        error: false,
        user: {
          ...state.user,
          token: action.payload,
        },
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case types.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        error: false,
        user: {
          token: '',
        },
      };
    case types.LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_USER_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case types.GET_USER_SUCCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload,
        },
        isLoading: false,
        error: false,
      };
    case types.GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
