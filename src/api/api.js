import axios from "axios";
axios.defaults.baseURL = "https://645e153212e0a87ac0e71f94.mockapi.io/";

const USERS_URL = "users";

export const getUsersPerPage = (page) => {
  try {
    return axios.get(`${USERS_URL}`, { params: { limit: 3, page } });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = () => {
  try {
    return axios.get(`${USERS_URL}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateFollowers = async (user) => {
  try {
    return await axios.put(`${USERS_URL}/${user.id}`, user);
  } catch (error) {
    console.log(error.message);
  }
};
