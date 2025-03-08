import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/v1/user/getusers"
    );
 
    return response.data;
  } catch (error) {
    console.error("error fetching users: ", error);
    return [];
  }
};
