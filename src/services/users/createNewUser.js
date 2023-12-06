import axios from "axios";
import { urlCreateUser } from "../../config/apiConfig";

const createNewUser = async (userData) => {
  try {
    const response = await axios.post(urlCreateUser, userData);

    const data = await response.data;

    return data;
  } catch (error) {
    throw error;
  }
};

export default createNewUser;
