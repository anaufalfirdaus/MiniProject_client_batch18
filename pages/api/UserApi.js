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

//TODO: Update
const updateProfile = async (data) => {
  console.log(data, 'API');
  try {
    const result = await axios.patch(`${domain}/profileupdate`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const updateEmail = async (data) => {
  try {
    const result = await axios.patch(`${domain}/updateemail`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const uploadPhoto = async (data) => {
  try {
    const result = await axios.patch(`${domain}/uploadphoto`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

const updatePhone = async (data) => {
  try {
    const result = await axios.patch(`${domain}/updatephone`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const updateAddress = async (data) => {
  try {
    const result = await axios.patch(`${domain}/updateaddress`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const updatePassword = async (data) => {
  try {
    const result = await axios.patch(`${domain}/passwordupdate`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const updateEducation = async (data) => {
  try {
    const result = await axios.patch(`${domain}/updateeducation`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const updateExperience = async (data) => {
  try {
    const result = await axios.patch(`${domain}/updateExperience`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

//TODO: Add
const addEmail = async (data) => {
  try {
    const result = await axios.post(`${domain}/addemail`, data);
    return result;
  } catch (err) {
    return err;
  }
};

const addPhone = async (data) => {
  try {
    const result = await axios.post(`${domain}/addphone`, data);
    return result;
  } catch (err) {
    return err;
  }
};

const addAddress = async (data) => {
  try {
    const result = await axios.post(`${domain}/addaddress`, data);
    return result;
  } catch (err) {
    return err;
  }
};

const addEducation = async (data) => {
  try {
    const result = await axios.post(`${domain}/addeducation`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const addExperience = async (data) => {
  try {
    const result = await axios.post(`${domain}/addexperience`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

const addSkill = async (data) => {
  try {
    const result = await axios.post(`${domain}/addskill`, data);
    return result;
  } catch (err) {
    return err.message;
  }
};

//TODO: Delete/Remove
const removeEmail = async (emailId) => {
  try {
    const result = await axios.delete(`${domain}/removeemail/${emailId}`);
    return result;
  } catch (err) {
    return err;
  }
};

const removePhone = async (phoneId) => {
  try {
    const result = await axios.delete(`${domain}/removePhone/${phoneId}`);
    return result;
  } catch (err) {
    return err;
  }
};

const removeAddress = async (addressId) => {
  try {
    const result = await axios.delete(`${domain}/removeaddress/${addressId}`);
    return result;
  } catch (err) {
    return err;
  }
};

const removeEducation = async (educationId) => {
  try {
    const result = await axios.delete(
      `${domain}/removeeducation/${educationId}`
    );
    return result;
  } catch (err) {
    return err;
  }
};

const removeExperience = async (expId) => {
  try {
    const result = await axios.delete(`${domain}/removeexperience/${expId}`);
    return result;
  } catch (err) {
    return err;
  }
};

const removeSkill = async (skillId) => {
  try {
    const result = await axios.delete(`${domain}/removeskill/${skillId}`);
    return result;
  } catch (err) {
    return err;
  }
};

export {
  signin,
  signup,
  profile,
  getProfile,
  addEmail,
  addPhone,
  addAddress,
  addEducation,
  addExperience,
  addSkill,
  updateProfile,
  updatePassword,
  updateEmail,
  updatePhone,
  updateAddress,
  uploadPhoto,
  updateEducation,
  updateExperience,
  removeEmail,
  removePhone,
  removeAddress,
  removeEducation,
  removeExperience,
  removeSkill,
};
