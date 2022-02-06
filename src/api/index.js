import axios from 'axios';
import { SERVER_URL } from '../constants';

export const login = async () => {
  const data = await axios
    .get(`${SERVER_URL}/oauth2/authorization/google`)
    .catch(err => err.response);

  console.log(data);
};

export const signup = async body => {
  const { data } = await axios
    .post(`${SERVER_URL}/signup`, body)
    .catch(err => err.response);

  return data;
};

export const refreshToken = async () => {
  const token = localStorage.getItem('token');
  console.log(token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  const { newToken } = await axios
    .get(`${SERVER_URL}/api/v1/auth/refresh`)
    .catch(err => {
      throw new Error(err.response);
    });
  console.log(newToken);

  return newToken;
};