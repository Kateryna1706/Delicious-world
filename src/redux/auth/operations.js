import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

axios.defaults.baseURL =
  'https%3A%2F%2Fplatform.fatsecret.com%2Frest%2Fserver.api';

// export const CLIENT_ID = '01bba558eb4d4021a5b9b8f89e807ce7';

export const CLIENT_SECRET = '59ceac169eab441eb604d407441f71a8';

export const CONSUMER_KEY = '01bba558eb4d4021a5b9b8f89e807ce7';

export const CONSUMER_SECRET = '7035d126e5e64fefa4f82922cad99d28';

const CreateNormalizedParameters = () => {
  const date = new Date();
  const oauthTimestamp = date.getTime();
  console.log(oauthTimestamp);

  const oauthNonce = nanoid();
  console.log(oauthNonce);

  return `oauth_consumer_key%3D${CONSUMER_KEY}%26oauth_nonce%3D${oauthNonce}%26oauth_signature_method%3D"HMAC-SHA1"%26oauth_timestamp%3D${oauthTimestamp}%26oauth_version%3D"1.0"`;
};

const normalizedParameters = CreateNormalizedParameters();

console.log(normalizedParameters);

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`?${normalizedParameters}`, credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
