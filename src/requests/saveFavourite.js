import axios from "axios";

const saveFavourite = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/Favourite",
      values
    );
    return response.status;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.response);
    return error.status;
  }
};

export default saveFavourite;
