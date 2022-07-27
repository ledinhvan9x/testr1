import axios from 'axios';

const url = process.env.REACT_APP_URL;

const axiosClient = axios.create({
  baseURL: url,
  validateStatus: (status) => status >= 200 && status < 400,
});

export default axiosClient;
