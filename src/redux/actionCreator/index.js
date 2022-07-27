/* eslint-disable camelcase */
import axiosClient from 'utils/axiosClient';
import { toast } from 'react-toastify';
import actions from '../actions';

const {
  loginStart,
  loginSuccess,
  loginError,
  logoutStart,
  logoutSuccess,
  logoutError,
  getUserStart,
  getUserSuccess,
  getUserError,
  actFetchAnimalsStart,
  actFetchAnimalsSuccess,
  actFetchAnimalsError,
} = actions;

const loginUser = (apiKey, secret, callback) => async (dispatch) => {
  try {
    await dispatch(loginStart());
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', apiKey);
    params.append('client_secret', secret);
    const {
      data: { access_token },
    } = await axiosClient.post('oauth2/token', params);

    axiosClient.defaults.headers.Authorization = `Bearer ${access_token}`;

    await dispatch(loginSuccess(access_token));
    toast.success('Logged In Successfully !!!');
    callback();
  } catch (err) {
    await dispatch(loginError(err.message));
    toast.error(err.message);
  }
};

const logoutUser = () => async (dispatch) => {
  try {
    await dispatch(logoutStart());

    await dispatch(logoutSuccess());
    toast.success('Goodbye !!!');
  } catch (err) {
    await dispatch(logoutError(err));
  }
};

const getUser = (token) => async (dispatch) => {
  try {
    dispatch(getUserStart());
    dispatch(getUserSuccess(token));
    axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (err) {
    dispatch(getUserError(err));
  }
};

const fetchAnimals = () => async (dispatch) => {
  try {
    await dispatch(actFetchAnimalsStart());
    const res = await axiosClient.get('animals');
    await dispatch(actFetchAnimalsSuccess(res.data.animals));
  } catch (err) {
    await dispatch(actFetchAnimalsError(err));
  }
};

export {
  loginUser, logoutUser, getUser, fetchAnimals,
};
