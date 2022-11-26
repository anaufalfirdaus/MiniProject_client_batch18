import axios from 'axios';
import { domain } from '../config/config';
import { getCookie } from 'cookies-next';

const signup = async (data) => {
  try {
    const result = await axios.post(`${domain}/auth/signup`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (data) => {
  try {
    const result = await axios.post(`${domain}/auth/login`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const profile = async () => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie('access_token')}`,
  };
  try {
    const result = await axios.get(`${domain}/profile`);
    return result;
  } catch (error) {
    return error;
  }
};

const getProfile = async (id) => {
  try {
    const result = await axios.get(`${domain}/profileuser/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};

const getEmails = async (id) => {
  try {
    const result = await axios.get(`${domain}/getemails/${id}`);
    return result;
  } catch (error) {
    return error.message;
  }
};

const addEmail = async (id, email) => {
  try {
    const result = await axios.post(`${domain}/addemail/${id}`, { email });
    return result;
  } catch (err) {
    return err;
  }
};

const removeEmail = async (id) => {
  try {
    const result = await axios.get(`${domain}/removeemail/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};

const addPhone = async (id, phone) => {
  try {
    const result = await axios.post(`${domain}/addphone/${id}`, { phone });
    return result;
  } catch (err) {
    return err;
  }
};

const addAddress = async (id, data) => {
  try {
    const result = await axios.post(`${domain}/addaddress/${id}`, { ...data });
    return result;
  } catch (err) {
    return err;
  }
};

export default {
  signin,
  signup,
  profile,
  getProfile,
  getEmails,
  addEmail,
  removeEmail,
  addPhone,
  addAddress,
};
