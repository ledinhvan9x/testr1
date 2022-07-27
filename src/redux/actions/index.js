import * as types from 'redux/constants/ActionTypes';

const actions = {

  // LOGIN
  loginStart: () => ({
    type: types.LOGIN_START,
  }),

  loginSuccess: (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload,
  }),

  loginError: (payload) => ({
    type: types.LOGIN_ERROR,
    payload,
  }),

  // LOGIN

  // LOGOUT
  logoutStart: () => ({
    type: types.LOGOUT_START,
  }),

  logoutSuccess: () => ({
    type: types.LOGOUT_SUCCESS,
  }),

  logoutError: () => ({
    type: types.LOGOUT_ERROR,
  }),
  // LOGOUT

  // GET USER
  getUserStart: () => ({
    type: types.GET_USER_START,
  }),

  getUserSuccess: (payload) => ({
    type: types.GET_USER_SUCCCESS,
    payload,
  }),

  getUserError: (payload) => ({
    type: actions.getUserError,
    payload,
  }),
  // GET USER

  // FETCH ALL ANIMALS
  actFetchAnimalsStart: () => ({
    type: types.FETCH_ANIMALS_START,
  }),

  actFetchAnimalsSuccess: (payload) => ({
    type: types.FETCH_ANIMALS_SUCCESS,
    payload,
  }),

  actFetchAnimalsError: (payload) => ({
    type: types.FETCH_ANIMALS_ERROR,
    payload,
  }),
// FETCH ALL ANIMALS
};

export default actions;
