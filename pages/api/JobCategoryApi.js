import axios from "axios";
import { domain } from "../config/config";

const List = async () => {
  try {
    const result = await axios.get(`${domain}/api/jobcategory/`);
    const data = result.data;
    return data;
  } catch (error) {
    return await error.message;
  }
};

const Delete = async (id) => {
  try {
    const result = await axios.delete(`${domain}/api/jobcategory/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const Create = async (payload) => {
  try {
    const result = await axios.post(`${domain}/api/jobcategory/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const Update = async (data) => {
  try {
    const result = await axios.put(
      `${domain}/api/jobcategory/${data.jotyId}`,
      data
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

const FindOne = async (id) => {
  try {
    const result = await axios.get(`${domain}/api/jobcategory/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { List, Delete, Create, Update, FindOne };